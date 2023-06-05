export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

export function health(obj) {
  if (obj.health > 50) return 'healthy';
  if (obj.health > 15) return 'wounded';
  return 'critical';
}

export function sortHealth(arr) {
  const arrsort = arr.sort((a, b) => {
    const res = parseFloat(b.health) - parseFloat(a.health);
    return res;
  });
  return arrsort;
}

export class Character {
  constructor(name, type) {
    if ((name.trim.length < 2) || (name.trim.length > 10)) {
      throw new Error('Name length is not correct');
    }
    if ((type !== 'Bowman') && (type !== 'Swordsman') && (type !== 'Magician') && (type !== 'Daemon') && (type !== 'Undead') && (type !== 'Zombie')) {
      throw new Error('Type is not correct');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Daemon') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Undead') {
      this.attack = 40;
      this.defence = 10;
    } else {
      this.attack = 10;
      this.defence = 40;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += 20;
      this.defence += 20;
      this.health = 100;
    } else {
      throw new Error('Level up for dead is not allowed');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) this.health = 0;
  }
}
