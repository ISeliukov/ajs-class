import { Character } from './basic';

class Daemon extends Character {
  constructor(...args) {
    super(...args);
    this.attack = 25;
    this.defence = 25;
  }
}

const obj = Daemon('Вася', 'Daemon');

console.log(obj);
