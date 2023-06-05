import { Character } from './basic';

class Magician extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 10;
    this.defence = 40;
  }
}

const obj = Magician('����', 'Magician');

console.log(obj);
