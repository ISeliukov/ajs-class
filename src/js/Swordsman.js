import { Character } from './basic';

class Swordsman extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 40;
    this.defence = 10;
  }
}

const obj = Swordsman('����', 'Swordsman');

console.log(obj);
