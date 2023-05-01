import { readFile } from './readFile.mjs';
import { startInterface } from './interface.mjs';
import { showResponse } from './response.mjs';

const content = readFile('e15x15');
const input = await startInterface(content);
showResponse(input, content);

