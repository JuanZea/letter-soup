import { getInlineContent } from './helpers.mjs';
import { findLR, findRL, findTB, findBT } from './find.mjs';

export const showResponse = (input, content) => {
  const inline = getInlineContent(content);

  const findingsLR = findLR(inline, input);
  const findingsRL = findRL(inline, input);
  const findingsTB = findTB(inline, input);
  const findingsBT = findBT(inline, input);

  for(let i = 0; i < findingsLR.length; i++) {
    for(let j = 0; j < findingsRL.length; j++) {
      if (findingsLR[i].column + (input.length - 1) === findingsRL[j].column) {
        findingsRL.splice(j, 1);
      }
    }
  }

  for(let i = 0; i < findingsTB.length; i++) {
    for(let j = 0; j < findingsBT.length; j++) {
      if (findingsTB[i].row + (input.length - 1) === findingsBT[j].row) {
        findingsBT.splice(j, 1);
      }
    }
  }

  const findings = [...findingsLR, ...findingsRL, ...findingsTB, ...findingsBT];

  if (findings.length > 0) {
    console.log(`\nLa palabra ${input} se encontró en las siguientes posiciones:`);
    findings.forEach((finding) =>
      console.log(`Fila: ${finding.row + 1}, Columna: ${finding.column + 1}, Dirección: ${finding.direction}`)
    );
  } else console.log(`\nLa palabra ${input} no se encontró`);
};
