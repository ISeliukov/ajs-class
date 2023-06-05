import { Character } from './basic';

class Bowman extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 25;
    this.defence = 25;
  }
}

const obj = Bowman('Вася', 'Bowman');

console.log(obj);
