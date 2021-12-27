import React from "react";
import './SlideshowButton.css';

interface SlideshowButtonProps {
  setSlideshow(value: boolean): void;
}

export function SlideshowButton(props: SlideshowButtonProps) {
  return (
    <div className="SlideshowButton NavbarElm">
      <button onClick={() => props.setSlideshow(true)}>
        Slideshow
      </button>
    </div>
  )
}
