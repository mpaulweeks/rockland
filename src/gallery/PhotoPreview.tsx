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
    <div className="PhotoPreview" onClick={() => props.focusPhoto(props.photo)}>
      <img src={hiRes} />
      <section>{props.photo.date}</section>
    </div>
  )
}
