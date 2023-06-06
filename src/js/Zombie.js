import { Character } from './basic';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

const obj = new Zombie('Вася', 'Zombie');

console.log(obj);
