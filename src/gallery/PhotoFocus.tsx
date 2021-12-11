import { Photo } from "../util/types";
import './PhotoFocus.css';

interface PhotoFocusProps {
  photo: Photo;
  onExit(): void;
}

export function PhotoFocus(props: PhotoFocusProps) {
  return (
    <div className="PhotoFocus" onClick={props.onExit}>
      {JSON.stringify(props.photo)}
    </div>
  )
}
