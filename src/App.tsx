import React, { useCallback, useState } from 'react';
import './App.css';
import { Database } from './db';
import { Gallery } from './Gallery';

function App() {
  const [db, setDb] = useState<Database>();

  useCallback(async () => {
    const db = await Database.load();
    setDb(db);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {db ? (
          <Gallery db={db} />
        ):(
          <h1>loading...</h1>
        )}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
