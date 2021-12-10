import React from "react";
import { Photo } from "./types";
import './PhotoPreview.css';

export function PhotoPreview(props: {photo: Photo}) {
  const hiRes = `images/${props.photo.image}`;
  return (
    <div className="PhotoPreview">
      <img src={hiRes} />
      <section>{props.photo.date}</section>
    </div>
  )
}
