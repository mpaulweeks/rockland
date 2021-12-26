import React from 'react';
import './Navbar.css';
import { Search } from './Search';
import { Sorter } from './Sorter';
import { PhotoSort } from '../util/types';

interface NavbarProps {
  setSearchTerms(value: string[]): void;
  sortBy: PhotoSort;
  setSortBy(value: PhotoSort): void;
}

export function Navbar(props: NavbarProps) {
  return (
    <header className="Navbar">
      <h1>
        Rockland Fan Site
      </h1>
      <Sorter sortBy={props.sortBy} setSortBy={props.setSortBy} />
      <Search setSearchTerms={props.setSearchTerms} />
    </header>
  );
}
