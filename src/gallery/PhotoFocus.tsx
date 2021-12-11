import { Photo } from "../util/types";
import './PhotoFocus.css';

interface PhotoFocusProps {
  photo: Photo;
  onExit(): void;
}

export function PhotoFocus(props: PhotoFocusProps) {
  const hiRes = `images/${props.photo.image}`;
  return (
    <div className="PhotoFocus" onClick={props.onExit}>
      <div
        className="PhotoFocusImage"
        style={{backgroundImage: `url(${hiRes})`}}
      >
        &nbsp;
      </div>
      <div className="PhotoFocusDate">{props.photo.date}</div>
      <div className="PhotoFocusDescription">{props.photo.description}</div>
    </div>
  )
}
