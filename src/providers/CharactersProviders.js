import React, { createContext, useState } from 'react';
import CharactersContext from '../contexts/CharactersContext'
import charactersServices from '../services/charactersServices';

const CharactersDefault  = { character: [], player:{name: "", health: "40", max_atk: 5, image: ""}}

export default function CharactersProviders({ children }) {
    const [personage, setPersonage] = useState(CharactersDefault);

    const useCharacter = new charactersServices([personage, setPersonage])

    return (
        <CharactersContext.Provider value={useCharacter}>
            {children}
        </CharactersContext.Provider>
    );
}