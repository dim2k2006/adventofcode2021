import { sum } from 'lodash';

const compareMeasurements = (measurements: number[]): number => {
  const iter = (accumulator: number, list: number[]): number => {
    if (list.length === 0) return accumulator;

    const numberA = list[0];
    const numberB = list[1];

    if (numberA === undefined || numberB === undefined) {
      return iter(accumulator, list.slice(2));
    }

    if (numberB > numberA) {
      return iter(accumulator + 1, list.slice(1));
    }

    return iter(accumulator, list.slice(1));
  };

  return iter(0, measurements);
};

export const aggregateData = (measurements: number[]): number[] => {
  const itemsCount = 3;

  const iter = (accumulator: number[], list: number[]): number[] => {
    if (list.length === 0) {
      return accumulator;
    }

    const dataChunk = list.slice(0, itemsCount);

    if (dataChunk.length < itemsCount) {
      return iter(accumulator, list.slice(1));
    }

    return iter([...accumulator, sum(dataChunk)], list.slice(1));
  };

  return iter([], measurements);
};

export default compareMeasurements;