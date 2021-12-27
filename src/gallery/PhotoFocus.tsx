import { Photo } from "../util/types";
import './PhotoFocus.css';

interface PhotoFocusProps {
  photo: Photo;
  onPrev(): void;
  onNext(): void;
  onExit(): void;
}

export function PhotoFocus(props: PhotoFocusProps) {
  const hiRes = `images/${props.photo.image}`;
  return (
    <div className="PhotoFocus" onClick={props.onExit}>
      <div
        className="PhotoFocusImage"
        style={{ backgroundImage: `url(${hiRes})` }}
      >
        &nbsp;
      </div>
      <div className="PhotoFocusDescription">{props.photo.description}</div>
      <div className="PhotoPrev" onClick={evt => { evt.stopPropagation(); props.onPrev(); }} />
      <div className="PhotoNext" onClick={evt => { evt.stopPropagation(); props.onNext(); }} />
    </div>
  )
}
