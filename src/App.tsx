import React, { useEffect, useState } from 'react';
import './App.css';
import { Database } from './util/db';
import { Gallery } from './gallery';
import { DefaultSortBy, Navbar } from './navbar';
import { PhotoSort } from './util/types';

export function App() {
  const [db, setDb] = useState<Database>();
  const [searchTerms, setSearchTerms] = useState<string[]>([]);
  const [slideshow, setSlideshow] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<PhotoSort>(DefaultSortBy);

  useEffect(() => {
    (async () => {
      const db = await Database.load();
      setDb(db);
    })();
  }, []);

  return (
    <div className="App">
      <Navbar
        setSlideshow={setSlideshow}
        setSearchTerms={setSearchTerms}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {db ? (
        <Gallery
          db={db}
          slideshow={slideshow}
          setSlideshow={setSlideshow}
          searchTerms={searchTerms}
          sortBy={sortBy}
        />
      ) : (
        <div className='AppLoading'>loading...</div>
      )}
    </div>
  );
}
