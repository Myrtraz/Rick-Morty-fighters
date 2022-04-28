import React, {useEffect, useState} from 'react';

export default function useCharacter() {
    const url = 'https://rickandmortyapi.com/api/character/1,2,3'
    const [character, setCharacter] = useState([]);
    
    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setCharacter(data)
            })
        }, [url]);

    return character;
}