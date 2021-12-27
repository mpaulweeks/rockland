import React from 'react';
import './Navbar.css';
import { Search } from './Search';
import { Sorter } from './Sorter';
import { PhotoSort } from '../util/types';
import { SlideshowButton } from './SlideshowButton';

interface NavbarProps {
  setSearchTerms(value: string[]): void;
  setSlideshow(value: boolean): void;
  sortBy: PhotoSort;
  setSortBy(value: PhotoSort): void;
}

export function Navbar(props: NavbarProps) {
  return (
    <header className="Navbar">
      <h1>
        Rockland Fan Site
      </h1>
      <SlideshowButton setSlideshow={props.setSlideshow} />
      <Sorter sortBy={props.sortBy} setSortBy={props.setSortBy} />
      <Search setSearchTerms={props.setSearchTerms} />
    </header>
  );
}
