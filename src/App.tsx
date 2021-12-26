import React, { useEffect, useState } from 'react';
import './App.css';
import { Database } from './util/db';
import { Gallery } from './gallery';
import { DefaultSortBy, Navbar } from './navbar';
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
      <Navbar
        setSearchTerms={setSearchTerms}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {db ? (
        <Gallery db={db} searchTerms={searchTerms} sortBy={sortBy} />
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
