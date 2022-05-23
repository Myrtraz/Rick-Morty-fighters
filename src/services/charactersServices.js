import AsyncStorage from '@react-native-async-storage/async-storage';
export default class charactersServices {
    context

    constructor(context) {
        console.log("characters_loaded")
        this.context = context
        const [personage, setPersonage] = context;

        AsyncStorage.getItem('personage')
            .then(item => {
                if (item && item != JSON.stringify(personage)) {
                    setPersonage(JSON.parse(item))
                } else {
                    AsyncStorage.setItem('personage', JSON.stringify(personage))
                }
            })
    }

    getCharacter() { 
        const [personage, setPersonage] = this.context;
        return personage.player
        
    }

    setCharacter({name, image}) {
        const [personage, setPersonage] = this.context;
        const localPersonage = personage;

        localPersonage.player = {...localPersonage.player, name, image}

        AsyncStorage.setItem('personage', JSON.stringify(localPersonage))
        setPersonage(localPersonage);
    }

    getRouter() { 
        const [personage, setPersonage] = this.context;
        return personage.router
        
    }

    setRouter(router) {
        const [personage, setPersonage] = this.context;
        const localPersonage = personage;

        localPersonage.router = router

        setPersonage(localPersonage);
    }

    attack() {
        const [personage, setPersonage] = this.context;

        let dmg = Math.floor(Math.random() * personage.player.max_atk);
        return dmg
    }

    defense() {
        const [personage, setPersonage] = this.context;

        return personage
    }


}