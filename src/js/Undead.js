import { Character } from './basic';

class Undead extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 40;
    this.defence = 10;
  }
}

const obj = Undead('����', 'Undead');

console.log(obj);
