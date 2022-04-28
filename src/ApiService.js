import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ApiService {
    
    getHost() {
        return 'https://rickandmortyapi.com/api';
    }

    constructor() {
        this.domain = this.getHost()
        this.storageService = AsyncStorage
    }

    getCharacters(cb) {
        fetch(this.getHost() + '/character/1,2,3')
            .then(r => r.json())
            .then(data => {
                cb(data)
            })
    }

    getCharacter(characterIds, cb) {
        const queryParams = characterIds.map(personageId => "id_in=" + personageId).join("&")

        if (queryParams.length) {
            fetch(this.getHost() + '/id?' + queryParams)
                .then(r => r.json())
                .then(data => {
                    cb(data)
                    console.log(data)
            })
        }

        /*
            if (queryParams.length) {
            fetch(this.getHost() + '/id?' + queryParams)
                .then(r => r.json())
                .then(data => {
                    cb(data)
                    console.log(data)
            })
        }
        */
    }
}