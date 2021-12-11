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
        className="PhotoImage"
        style={{backgroundImage: `url(${hiRes})`}}
      >
        &nbsp;
      </div>
      <div className="PhotoDate">{props.photo.date}</div>
      <div className="PhotoDescription">{props.photo.description}</div>
    </div>
  )
}
