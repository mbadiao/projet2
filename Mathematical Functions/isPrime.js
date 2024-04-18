const isPrime = (nbr) => {
  for (i = 2; i < nbr; i++) {
    if (nbr % i === 0) {
      return false;
    }
  }
  return true;
};
