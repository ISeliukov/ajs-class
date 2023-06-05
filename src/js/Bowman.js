import { Character } from './basic';

export default class Bowman extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 25;
    this.defence = 25;
  }
}

const obj = new Bowman('Вася', 'Bowman');

console.log(obj);
