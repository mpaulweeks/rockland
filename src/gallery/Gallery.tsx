import { useEffect, useState } from "react";
import { Database } from "../util/db";
import { PhotoPreview } from "./PhotoPreview";
import { Photo, PhotoSort } from "../util/types";
import './Gallery.css';
import { PhotoFocus } from "./PhotoFocus";
import { getNextInArray, getPrevInArray } from "../util/util";
import { UrlManager } from "../util/url";

interface GalleryProps {
  db: Database;
  searchTerms: string[];
  sortBy: PhotoSort;
}

export function Gallery(props: GalleryProps) {
  const [focused, setFocused] = useState<Photo>();

  // todo how to run after every setFocused?
  function updateFocused(photo: Photo | undefined) {
    setFocused(photo);
    new UrlManager().setUrl(photo);
  }
  const records = props.searchTerms.length
    ? props.db.search(props.searchTerms, props.sortBy)
    : props.db.get(props.sortBy);

  useEffect(() => {
    const hash = new UrlManager().readUrl();
    if (hash) {
      const match = records.filter(p => p.image === hash)[0];
      console.log(hash, match);
      updateFocused(match);
    }
  }, []);

  // todo does not work :(
  function handleKeyDown(code: string) {
    if (focused === undefined) { return; }
    console.log(code);
  };
  useEffect(() => {
    const onKeyDown = (evt: KeyboardEvent) => {
      const records = props.db.get(props.sortBy);
      if (evt.code === 'ArrowLeft') {
        setFocused(current => getPrevInArray(current, records));
      }
      if (evt.code === 'ArrowRight') {
        setFocused(current => getNextInArray(current, records));
      }
      if (evt.code === 'Escape') {
        setFocused(undefined);
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="GalleryContainer"
      onKeyDown={evt => handleKeyDown(evt.code)}
    >
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
