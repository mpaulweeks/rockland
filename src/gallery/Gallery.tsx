import { useEffect, useRef, useState } from "react";
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

  const records = props.searchTerms.length
    ? props.db.search(props.searchTerms, props.sortBy)
    : props.db.get(props.sortBy);

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
  }, [records]);

  useEffect(() => {
    if (props.slideshow) {
      setInterval(() => {
        updateFocused(getNextInArray(focused, records));
      }, 500);
    }
  }, [props, focused]);

  function updateFocused(photo: Photo | undefined) {
    setFocused(photo);
    URL.setUrl(photo);
    if (photo === undefined) {
      props.setSlideshow(false);
    }
  }
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
          onExit={() => updateFocused(undefined)}
        />
      )}
    </div>
  )
}
