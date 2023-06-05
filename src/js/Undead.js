import { Character } from './basic';

export default class Undead extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 40;
    this.defence = 10;
  }
}

const obj = new Undead('Вася', 'Undead');

console.log(obj);
