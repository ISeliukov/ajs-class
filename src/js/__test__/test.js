import {health, sortHealth, Character} from '../basic.js';


test("basic test", () => {
    let result = 4;
    expect(result).toBe(4);
});

test("health test", () => {
    let result = health({name: 'Маг', health: 90});
    expect(result).toBe("healthy");
    result = health({name: 'Маг', health: 50});
    expect(result).toBe("wounded");
    result = health({name: 'Маг', health: 15});
    expect(result).toBe("critical");
});

test("health sort test", () => {
    let result = sortHealth([
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      ]);

    expect(result).toEqual([
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ]);
});




test("Character test", () => {
    let result = new Character('Вася', 'Bowman');
    expect(result.type).toBe('Bowman');
    result = new Character('Вася', 'Swordsman');
    expect(result.type).toBe('Swordsman');
    result = new Character('Вася', 'Magician');
    expect(result.type).toBe('Magician');
    result = new Character('Вася', 'Daemon');
    expect(result.type).toBe('Daemon');
    result = new Character('Вася', 'Undead');
    expect(result.type).toBe('Undead');
    result = new Character('Вася', 'Zombie');
    expect(result.type).toBe('Zombie');

});

test("Character fail test", () => {
  let t = () => {
    throw new Error('Name length is not correct');
  }
    let result = new Character('Ва', 'Bowman');
    expect(t()).toThrow('Name length is not correct');
  t = () => {
    throw new Error('Type is not correct');
  }
    result = new Character('Вася', 'Swords');
    expect(t()).toThrow('Type is not correct');
});
