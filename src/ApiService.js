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
}