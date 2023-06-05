import {health, sortHealth, Character} from '../basic.js';


test("basic test", () => {
    let result = 4;
    expect(result).toBe(4);
});

test("health test", () => {
    let result = health({name: '���', health: 90});
    expect(result).toBe("healthy");
    result = health({name: '���', health: 50});
    expect(result).toBe("wounded");
    result = health({name: '���', health: 15});
    expect(result).toBe("critical");
});

test("health sort test", () => {
    let result = sortHealth([
      {name: '������', health: 10},
      {name: '���', health: 100},
      {name: '������', health: 80},
      ]);

    expect(result).toEqual([
      {name: '���', health: 100},
      {name: '������', health: 80},
      {name: '������', health: 10},
    ]);
});




test("Character test", () => {
    let result = new Character('����', 'Bowman');
    expect(result.type).toBe('Bowman');
    result = new Character('����', 'Swordsman');
    expect(result.type).toBe('Swordsman');
    result = new Character('����', 'Magician');
    expect(result.type).toBe('Magician');
    result = new Character('����', 'Daemon');
    expect(result.type).toBe('Daemon');
    result = new Character('����', 'Undead');
    expect(result.type).toBe('Undead');
    result = new Character('����', 'Zombie');
    expect(result.type).toBe('Zombie');

});

test("Character fail test", () => {
  let t = () => {
    throw new Error('Name length is not correct');
  }
    let result = new Character('��', 'Bowman');
    expect(t()).toThrow('Name length is not correct');
  t = () => {
    throw new Error('Type is not correct');
  }
    result = new Character('����', 'Swords');
    expect(t()).toThrow('Type is not correct');
});
