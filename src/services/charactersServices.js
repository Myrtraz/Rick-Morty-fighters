export default class charactersServices {
    context

    constructor(context) {
        console.log("characters_loaded")

        this.context = context
    }

    get() { 
        const [personage, setPersonage] = this.context;

        personage.characters = personage.characters.map(character => {
            character.data = character.name
            
            return character
        })

        return personage
        
    }

    getCurrentCharacter() {
        const [personage, setpersonage] = this.context;
        return personage.character
    }

    attack() {
        const [personage, setPersonage] = this.context;
        const [dmg, setDmg] = this.damage

        dmg = 5;

        return dmg
    }

    defense() {
        const [personage, setPersonage] = this.context;

        return personage
    }


}