import { Character } from './basic';

export default class Zombie extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 10;
    this.defence = 40;
  }
}

const obj = new Zombie('����', 'Zombie');

console.log(obj);
