export type Command = 'forward' | 'down' | 'up';

export type DataChunk = [Command, number];

interface Accumulator {
  horizontalPosition: number;
  depth: number;
}

const parseData = (data: DataChunk): Accumulator => {
  const [command, value] = data;

  switch (command) {
    case 'forward':
      return { horizontalPosition: value, depth: 0 };
    case 'up':
      return { horizontalPosition: 0, depth: value * (-1) };
    case 'down':
      return { horizontalPosition: 0, depth: value };
  }
};

const main = (data: DataChunk[]): Accumulator => {
  const result = data.reduce<Accumulator>((accumulator, dataChunk) => {
    const data = parseData(dataChunk);

    const newAccumulator = {
      horizontalPosition: accumulator.horizontalPosition + data.horizontalPosition,
      depth: accumulator.depth + data.depth,
    };

    return newAccumulator;
  }, { horizontalPosition: 0, depth: 0 });

  return result;
};

export default main;
