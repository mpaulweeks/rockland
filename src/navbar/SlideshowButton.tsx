import React from "react";
import './SlideshowButton.css';

interface SlideshowButtonProps {
  setSlideshow(value: boolean): void;
}

export function SlideshowButton(props: SlideshowButtonProps) {
  return (
    <button
      className="SlideshowButton"
      onClick={() => props.setSlideshow(true)}
    >
      Slideshow
    </button>
  )
}
