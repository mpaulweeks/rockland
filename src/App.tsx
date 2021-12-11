import React, { useEffect, useState } from 'react';
import './App.css';
import { Database } from './util/db';
import { Gallery } from './gallery';

function App() {
  const [db, setDb] = useState<Database>();

  useEffect(() => {
    (async () => {
      const db = await Database.load();
      console.log(db);
      setDb(db);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Rockland Fan Site</h1>
      {db ? (
        <Gallery db={db} />
      ):(
        <h1>loading...</h1>
      )}
    </div>
  );
}

export default App;
