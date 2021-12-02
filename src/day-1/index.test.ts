import fs from 'fs';
import path from 'path';
import { toNumber } from 'lodash';
import compareMeasurements, { aggregateData } from '.'

const getFixturePath = (filename: string) => path.join(__dirname, filename);

const readFile = (filename: string) => fs.readFileSync(filename, 'utf-8');

describe('aggregateData', () => {
  test('Aggregates data.', () => {
    const numbers = [
      199,
      200,
      208,
      210,
      200,
      207,
      240,
      269,
      260,
      263,
    ];

    const expectedNumbers = [
      607,
      618,
      618,
      617,
      647,
      716,
      769,
      792,
    ];

    expect(aggregateData(numbers)).toEqual(expectedNumbers);
  });
});

describe('compareMeasurements', () => {
  test('Finds 7 increased measurements.', () => {
    const numbers = [
      199,
      200,
      208,
      210,
      200,
      207,
      240,
      269,
      260,
      263,
    ]

    expect(compareMeasurements(numbers)).toBe(7);
  });

  test('Finds all increased measurements.', () => {
    const numbers = readFile(getFixturePath('input.txt')).split('\n').map(toNumber);

    expect(compareMeasurements(numbers)).toBe(1754);
  });

  test('Finds all increased aggregated measurements.', () => {
    const numbers = readFile(getFixturePath('input.txt')).split('\n').map(toNumber);

    expect(compareMeasurements(aggregateData(numbers))).toBe(1789);
  });
})
