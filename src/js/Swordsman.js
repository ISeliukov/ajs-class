import { Character } from './basic';

export default class Swordsman extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 40;
    this.defence = 10;
  }
}

const obj = new Swordsman('Вася', 'Swordsman');

console.log(obj);
