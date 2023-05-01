import { readFileSync } from 'node:fs';

export const readFile = (name) => readFileSync(`./files/${name}.txt`).toString();