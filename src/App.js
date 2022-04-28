import React from 'react';
import Routes from './Routes'
import CharactersProviders from './providers/CharactersProviders';

function App() {
  return(
    <CharactersProviders>
        <Routes/>
    </CharactersProviders>
  );
}

export default App;