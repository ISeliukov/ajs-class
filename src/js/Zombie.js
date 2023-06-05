import { Character } from './basic';

class Zombie extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 10;
    this.defence = 40;
  }
}

const obj = Zombie('Вася', 'Zombie');

console.log(obj);
