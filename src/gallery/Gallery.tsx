import { useEffect, useRef, useState } from "react";
import { Database } from "../util/db";
import { PhotoPreview } from "./PhotoPreview";
import { Photo, PhotoSort } from "../util/types";
import './Gallery.css';
import { PhotoFocus } from "./PhotoFocus";
import { getNextInArray, getPrevInArray } from "../util/util";
import { UrlManager } from "../util/url";
import { KEYBOARD } from "./KeyboardListener";

interface GalleryProps {
  db: Database;
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

    const hash = new UrlManager().readUrl();
    if (hash) {
      const match = records.filter(p => p.image === hash)[0];
      console.log('hash', hash, match);
      updateFocused(match);
    }

    hasReadHash.current = true;
  }, [records]);

  function updateFocused(photo: Photo | undefined) {
    setFocused(photo);
    new UrlManager().setUrl(photo);
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
  });

  return (
    <div className="GalleryContainer">
      {records.map((p, i) => (
        <PhotoPreview
          key={i}
          photo={p}
          focusPhoto={p => setFocused(p)}
        />
      ))}
      {focused && (
        <PhotoFocus
          photo={focused}
          onExit={() => setFocused(undefined)}
        />
      )}
    </div>
  )
}
