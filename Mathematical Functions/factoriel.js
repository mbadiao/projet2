let result = 1;
const factoriel = (nbr) => {
  if (nbr === 0) {
    return result;
  }
  result *= nbr;
  return factoriel(nbr - 1);
};
