import { Character } from './basic';

export default class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

const obj = new Undead('Вася', 'Undead');

console.log(obj);
