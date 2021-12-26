import React from "react";
import { PhotoSort } from "../util/types";
import './Sorter.css';

interface SorterProps {
  sortBy: PhotoSort;
  setSortBy(sorter: PhotoSort): void;
}

export const DefaultSortBy: PhotoSort = {
  label: 'Recently Added',
  sortBy: p => p.added,
  reverse: true,
};
const SortOptions: PhotoSort[] = [
  DefaultSortBy, {
    label: 'Date Ascending',
    sortBy: p => p.date,
    reverse: false,
  }, {
    label: 'Date Descending',
    sortBy: p => p.date,
    reverse: true,
  }, {
    label: 'Shuffle',
    sortBy: p => Math.random(),
    reverse: false,
  },
];
function indexOf(label: string): number {
  return SortOptions.findIndex(opt =>
    opt.label === label
  );
}

export function Sorter(props: SorterProps) {
  function onChange(newLabel: string) {
    const index = indexOf(newLabel);
    const sorter = SortOptions[index];
    props.setSortBy(sorter);
  }

  const current = SortOptions[indexOf(props.sortBy.label)];

  return (
    <select className="Sorter" onChange={evt => onChange(evt.target.value)} value={current.label}>
      {SortOptions.map(opt => (
        <option
          key={opt.label}
          label={opt.label}
          value={opt.label}
        />
      ))}
    </select>
  )
}
