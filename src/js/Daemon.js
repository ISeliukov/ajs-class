import { Character } from './basic';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

const obj = new Daemon('Вася', 'Daemon');

console.log(obj);
