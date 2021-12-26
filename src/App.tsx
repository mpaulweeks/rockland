import React, { useEffect, useState } from 'react';
import './App.css';
import { Database } from './util/db';
import { Gallery } from './gallery';
import { DefaultSortBy, Search, Sorter } from './navbar';
import { PhotoSort } from './util/types';

export function App() {
  const [db, setDb] = useState<Database>();
  const [searchTerms, setSearchTerms] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<PhotoSort>(DefaultSortBy);

  useEffect(() => {
    (async () => {
      const db = await Database.load();
      console.log(db);
      setDb(db);
    })();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>
          Rockland Fan Site
        </h1>
        <Sorter sortBy={sortBy} setSortBy={setSortBy} />
        <Search setSearchTerms={setSearchTerms} />
      </header>
      {db ? (
        <Gallery db={db} searchTerms={searchTerms} sortBy={sortBy} />
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
