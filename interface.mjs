import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { getInlineContent } from './helpers.mjs';

export const startInterface = async (content) => {
  console.log('--| SOPA DE LETRAS |--\n');
  console.log(content + '\n');
  console.log(`Dimensión: ${Math.sqrt(getInlineContent(content).length)}\n`);
  const response = new Promise((resolve) => {
    const rl = createInterface({ input, output });
    rl.question('Escribe la palabra a buscar: ', (response) => {
      rl.close();
      resolve(response.toUpperCase());
    });
  });

  return response;
};
