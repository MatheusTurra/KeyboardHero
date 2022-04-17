import faker from "faker";

export function generateWords(count = 100) {
  return new Array(count)
    .fill()
    .map(_ => faker.random.word().toLowerCase());
}