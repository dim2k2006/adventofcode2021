export type Command = 'forward' | 'down' | 'up';

export type DataChunk = [Command, number];

interface Accumulator {
  horizontalPosition: number;
  depth: number;
  aim: number;
}

const parseData = (data: DataChunk, aim: number): Accumulator => {
  const [command, value] = data;

  switch (command) {
    case 'forward':
      return { horizontalPosition: value, depth: aim * value, aim: 0 };
    case 'up':
      return { horizontalPosition: 0, depth: 0, aim: value * (-1) };
    case 'down':
      return { horizontalPosition: 0, depth: 0, aim: value };
  }
};

const main = (data: DataChunk[]): Accumulator => {
  const result = data.reduce<Accumulator>((accumulator, dataChunk) => {
    const data = parseData(dataChunk, accumulator.aim);

    const newAccumulator = {
      horizontalPosition: accumulator.horizontalPosition + data.horizontalPosition,
      depth: accumulator.depth + data.depth,
      aim: accumulator.aim + data.aim
    };

    return newAccumulator;
  }, { horizontalPosition: 0, depth: 0, aim: 0 });

  return result;
};

export default main;
