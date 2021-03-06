import React from "react";
import { Photo } from "../util/types";
import './PhotoPreview.css';

interface PhotoPreviewProps {
  photo: Photo;
  focusPhoto(photo: Photo): void;
}

export function PhotoPreview(props: PhotoPreviewProps) {
  const hiRes = `images/${props.photo.image}`;
  return (
    <div
      className="PhotoPreview"
      style={{backgroundImage: `url(${hiRes})`}}
      onClick={() => props.focusPhoto(props.photo)}
    >
      <div className="PhotoPreviewDate">{props.photo.date}</div>
    </div>
  )
}
