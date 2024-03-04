import Character from '../character.js';
import Bowman from '../bowman.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Swordsman from '../swordsman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

test('minName', () => {
  const received = () => new Character('B', 'Bowman', 100);
  expect(received).toThrow(new Error('строка, min - 2 символа, max - 10'));
});

test('maxName', () => {
  const received = () => new Character('BowmanBowmanBowmanBowman', 'Bowman', 100);
  expect(received).toThrow(new Error('строка, min - 2 символа, max - 10'));
});

test('typeError', () => {
  const received = () => new Character('Name', 'BlablablaType');
  expect(received).toThrow(new Error("Должен быть один из типов: ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie']"));
});

test('Zombie parameters', () => {
  const zombie = new Zombie('Kek');
  expect([zombie.type, zombie.health, zombie.attack, zombie.defence]).toEqual(['Zombie', 100, 40, 10]);
});

test('Bowman parameters', () => {
  const bowman = new Bowman('RobinGood');
  expect([bowman.type, bowman.health, bowman.attack, bowman.defence]).toEqual(['Bowman', 100, 25, 25]);
});

test('Undead parameters', () => {
  const undead = new Undead('qwerty');
  expect([undead.level, undead.attack, undead.defence, undead.type]).toEqual([1, 25, 25, 'Undead']);
});

test('Magician parameters', () => {
  const magician = new Magician('Gendolf');
  expect([magician.level, magician.attack, magician.defence, magician.type]).toEqual([1, 10, 40, 'Magician']);
});

test('Daemon parameters', () => {
  const daemon = new Daemon('Azazel');
  expect([daemon.type, daemon.health, daemon.attack, daemon.defence]).toEqual(['Daemon', 100, 10, 40]);
});

test('Swordsman parameters', () => {
  const swordsman = new Swordsman('Arthur');
  expect([swordsman.type, swordsman.health, swordsman.attack, swordsman.defence]).toEqual(['Swordsman', 100, 40, 10]);
});

test('levelError', () => {
  const zombie = new Zombie('qweqweqwe');
  zombie.health = 0;
  expect(() => { zombie.levelUp(); }).toThrow(new Error('Показатель жизни равен 0'));
});

test('levelUp', () => {
  const daemon = new Daemon('qwe');
  daemon.levelUp();
  expect([daemon.level, daemon.attack, daemon.defence]).toEqual([2, 12, 48]);
});

test('damage', () => {
  const magician = new Magician('ll');
  magician.damage(10);
  expect(magician.health).toEqual(94);
});

test('damageError', () => {
  const swordsman = new Swordsman('Gendolf');
  swordsman.health = -5;
  expect(() => { swordsman.damage(5); }).toThrow(new Error('Показатель жизни равен или менее 0'));
});