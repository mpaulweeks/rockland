import { useCallback, useEffect, useRef, useState } from "react";
import { Database } from "../util/db";
import { PhotoPreview } from "./PhotoPreview";
import { Photo, PhotoSort } from "../util/types";
import './Gallery.css';
import { PhotoFocus } from "./PhotoFocus";
import { getNextInArray, getPrevInArray } from "../util/util";
import { KEYBOARD } from "./KeyboardListener";
import { URL } from "../util/url";

interface GalleryProps {
  db: Database;
  slideshow: boolean;
  setSlideshow(value: boolean): void;
  searchTerms: string[];
  sortBy: PhotoSort;
}

export function Gallery(props: GalleryProps) {
  const hasReadHash = useRef(false);
  const [focused, setFocused] = useState<Photo>();

  const { slideshow, db, searchTerms, sortBy, setSlideshow } = props;
  const records = searchTerms.length
    ? db.search(searchTerms, sortBy)
    : db.get(sortBy);
  const updateFocused = useCallback((photo: Photo | undefined) => {
    setFocused(photo);
    URL.setUrl(photo);
    if (photo === undefined) {
      setSlideshow(false);
    }
  }, [setSlideshow]);

  // handle hash on first render
  useEffect(() => {
    // https://betterprogramming.pub/stop-lying-to-react-about-missing-dependencies-10612e9aeeda
    if (hasReadHash.current) { return; }

    const hash = URL.readUrl();
    if (hash) {
      const match = records.filter(p => p.image === hash)[0];
      console.log('hash', hash, match);
      updateFocused(match);
    }

    hasReadHash.current = true;
  }, [records, updateFocused]);

  // handle slideshow
  useEffect(() => {
    if (slideshow) {
      if (focused) {
        const timer = window.setTimeout(() => {
          updateFocused(getNextInArray(focused, records));
        }, 2000);
        return () => window.clearTimeout(timer);
      } else {
        updateFocused(getNextInArray(focused, records));
      }
    }
  }, [focused, records, slideshow, updateFocused]);

  // helpers
  KEYBOARD.setCallback(evt => {
    if (evt.code === 'ArrowLeft') {
      updateFocused(getPrevInArray(focused, records));
    }
    if (evt.code === 'ArrowRight') {
      updateFocused(getNextInArray(focused, records));
    }
    if (evt.code === 'Escape') {
      updateFocused(undefined);
    }
    if (evt.code === 'KeyS') {
      updateFocused(records[0]);
      props.setSlideshow(true);
    }
  });

  // render
  return (
    <div className="GalleryContainer">
      {records.map((p, i) => (
        <PhotoPreview
          key={i}
          photo={p}
          focusPhoto={p => updateFocused(p)}
        />
      ))}
      {focused && (
        <PhotoFocus
          photo={focused}
          onPrev={() => updateFocused(getPrevInArray(focused, records))}
          onNext={() => updateFocused(getNextInArray(focused, records))}
          onExit={() => updateFocused(undefined)}
        />
      )}
    </div>
  )
}
