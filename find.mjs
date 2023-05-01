export const findLR = (inline, input) => {
  const findings = [];
  const dimension = Math.sqrt(inline.length);
  let x = 0;

  for (let i = 0; i < inline.length; i++) {
    if (input[x] !== inline[i]) x = 0;
    if (input[x] === inline[i]) {
      x++;
      if (x === input.length) {
        findings.push({
          row: Math.floor((i - input.length + 1) / dimension),
          column: (i - input.length + 1) % dimension,
          direction: 'LR',
        });
        x = 0;
        i--;
      }
    }
  }

  return findings;
};

export const findRL = (inline, input) => {
  const findings = [];
  const dimension = Math.sqrt(inline.length);
  let x = 0;

  for (let i = inline.length - 1; i >= 0; i--) {
    if (input[x] !== inline[i]) x = 0;
    if (input[x] === inline[i]) {
      x++;
      if (x === input.length) {
        findings.push({
          row: Math.floor((i + input.length - 1) / dimension),
          column: (i + input.length - 1) % dimension,
          direction: 'RL',
        });
        x = 0;
        i++;
      }
    }
  }

  return findings;
};

export const findTB = (inline, input) => {
  const findings = [];
  const dimension = Math.sqrt(inline.length);
  let x = 0;

  for (let j = 0; j < dimension; j++) {
    for (let i = 0; i < dimension; i++) {
      if (input[x] !== inline[j + i * dimension]) x = 0;
      if (input[x] === inline[j + i * dimension]) {
        x++;
        if (x === input.length) {
          findings.push({
            row: i - input.length + 1,
            column: j,
            direction: 'TB',
          });
          x = 0;
          i--;
        }
      }
    }
  }

  return findings;
};

export const findBT = (inline, input) => {
  const findings = [];
  const dimension = Math.sqrt(inline.length);
  let x = 0;

  for (let j = 0; j < dimension; j++) {
    for (let i = dimension - 1; i >= 0; i--) {
      if (input[x] !== inline[j + i * dimension]) x = 0;
      if (input[x] === inline[j + i * dimension]) {
        x++;
        if (x === input.length) {
          findings.push({
            row: i + input.length - 1,
            column: j,
            direction: 'BT',
          });
          x = 0;
          i++;
        }
      }
    }
  }

  return findings;
};
