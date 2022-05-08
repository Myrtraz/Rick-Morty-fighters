import React, { createContext, useState } from 'react';
import CharactersContext from '../contexts/CharactersContext'
import charactersServices from '../services/charactersServices';

const CharactersDefault  = { character: [], player:[ full_name, health, atk, image, abilities] }
//player:{ name, health, atk, image, abilities: {} }

export default function CharactersProviders({ children }) {
    const [personage, setPersonage] = useState(CharactersDefault);

    const useCharacter = new charactersServices([personage, setPersonage])

    return (
        <CharactersContext.Provider value={CharactersDefault}>
            {children}
        </CharactersContext.Provider>
    );
}