class Parent {
  constructor(name, health, strength, power) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.power = power;
  }

  attack = () => console.log(`I'm attacking with a power ${this.power}`);
}

class Warrior extends Parent {
  constructor(name, health, strength, power, speciality) {
    super(name, health, strength, power);
    this.speciality = speciality;
    this.avatar = "warrior";
  }

  strike = () => console.log("hayaaa!");
}

class Wizard extends Parent{
    constructor(name, health, strength, power, speciality){
        super(name,health,strength,power);
        this.speciality = speciality
        this.avatar = "wizard"
    }

    abracada = () => console.log("lacazed!");
}

class Archer extends Parent{
  constructor(name,health,strength,power,speciality){
    super(name,health,strength,power);
    this.speciality = speciality
    this.avatar = "archer"
  }
  
  draw = () => console.log("shpheww");
}

const warrior = new Warrior("Mulan","healthy","very strong",100,"KungFu");

const wizard = new Wizard("Potter","healthy","fairly strong",75,"sorcery");

const archer = new Archer("Argent","healthy","strong",82,"archery");

warrior.attack()

