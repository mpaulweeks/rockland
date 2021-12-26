import React, { useState } from "react";
import './Search.css';

interface SearchProps {
  setSearchTerms(terms: string[]): void;
}

export function Search(props: SearchProps) {
  const [searchRaw, setSearchRaw] = useState<string>('');

  function parseSearchTerms(raw: string) {
    setSearchRaw(raw);
    props.setSearchTerms(raw.trim().split(' ').map(s => s.trim()).filter(s => !!s));
  }

  return (
    <input
      className="Search"
      placeholder="Type here to search"
      value={searchRaw}
      onChange={evt => parseSearchTerms(evt.target.value)}
    />
  )
}
