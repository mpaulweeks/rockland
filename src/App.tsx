import React, { useEffect, useState } from 'react';
import './App.css';
import { Database } from './util/db';
import { Gallery } from './gallery';
import { Search } from './navbar';

export function App() {
  const [db, setDb] = useState<Database>();
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const db = await Database.load();
      console.log(db);
      setDb(db);
    })();
  }, []);


  return (
    <div>
      <header>
        <h1>
          Rockland Fan Site
        </h1>
        <Search setSearchTerms={setSearchTerms} />
      </header>
      {db ? (
        <Gallery db={db} searchTerms={searchTerms} />
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
