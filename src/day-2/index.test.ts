import path from 'path';
import fs from 'fs';
import { toNumber } from 'lodash';
import main, { DataChunk, Command } from '.';

const getFixturePath = (filename: string) => path.join(__dirname, filename);

const readFile = (filename: string) => fs.readFileSync(filename, 'utf-8');

test('Returns 15 as horizontal position and 10 as depth.', () => {
  const data: DataChunk[] = [
    ['forward', 5],
    ['down', 5],
    ['forward', 8],
    ['up', 3],
    ['down', 8],
    ['forward', 2],
  ];

  const { horizontalPosition, depth } = main(data);

  const result = horizontalPosition * depth;

  expect(horizontalPosition).toBe(15);
  expect(depth).toBe(60);
  expect(result).toBe(900);
});

test('Returns 2050 as horizontal position and 826 as depth.', () => {
  const data: DataChunk[] = readFile(getFixturePath('input.txt'))
    .split('\n')
    .map((item) => {
      const [command, value] = item.split(' ');

      return [command, toNumber(value)] as DataChunk;
    });

  const { horizontalPosition, depth } = main(data);

  const result = horizontalPosition * depth;

  expect(result).toBe(1857958050);
});