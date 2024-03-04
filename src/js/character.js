export default class Character {
    static typesOfCharacter = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie']

    constructor(name, type) {
        if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('строка, min - 2 символа, max - 10');
        }

        if (!Character.typesOfCharacter.includes(type)) {
            throw new Error("Должен быть один из типов: " + Character.typesOfCharacter);
        }
        
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
    }
    levelUp() {
        if (this.health === 0) {
            throw new Error('Показатель жизни равен 0');
        }

        this.level += 1;
        this.attack = this.attack + (this.attack * 20) / 100;
        this.defence = this.defence + (this.defence * 20) / 100;
        this.health = 100;
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        } else  {
            throw new Error('Показатель жизни равен или менее 0');
        }
    }
}