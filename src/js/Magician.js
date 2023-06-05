import { Character } from './basic';

export default class Magician extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 10;
    this.defence = 40;
  }
}

const obj = new Magician('Вася', 'Magician');

console.log(obj);
