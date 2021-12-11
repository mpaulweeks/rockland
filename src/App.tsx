import React, { useEffect, useState } from 'react';
import './App.css';
import { Database } from './util/db';
import { Gallery } from './gallery';

export function App() {
  const [db, setDb] = useState<Database>();
  const [searchRaw, setSearchRaw] = useState<string>('');
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const db = await Database.load();
      console.log(db);
      setDb(db);
    })();
  }, []);

  function parseSearchTerms(raw: string) {
    setSearchRaw(raw);
    setSearchTerms(raw.split(' ').map(s => s.trim()));
  }

  return (
    <div>
      <header>
        <h1>
          Rockland Fan Site
        </h1>
        <input
          placeholder="Type here to search"
          value={searchRaw}
          onChange={evt => parseSearchTerms(evt.target.value)}
        />
      </header>
      {db ? (
        <Gallery db={db} searchTerms={searchTerms} />
      ):(
        <h1>loading...</h1>
      )}
    </div>
  );
}
