import React from "react";
import { Photo } from "./types";
import './PhotoPreview.css';

export function PhotoPreview(props: {photo: Photo}) {
  return (
    <div className="PhotoPreview">
      <img src={props.photo.image} />
      <section>{props.photo.date}</section>
    </div>
  )
}
