import { useState } from "react";
import { Database } from "../util/db";
import { PhotoPreview } from "./PhotoPreview";
import { Photo, PhotoSort } from "../util/types";
import './Gallery.css';
import { PhotoFocus } from "./PhotoFocus";

interface GalleryProps {
  db: Database;
}

export function Gallery(props: GalleryProps) {
  const [focused, setFocused] = useState<Photo>();
  const [sortBy, setSortBy] = useState<PhotoSort>({
    sortBy: p =>  p.date,
    reverse: false,
  });

  const records = props.db.get(sortBy);

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
