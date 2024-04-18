// folrmule Fn = Fn-1 + Fn-2
function fibonacci(n) {
  //on initialise le tableau de sequence
  let fibSequence = [0, 1];
  while (fibSequence.length < n) {
    //puis on calcul la prochaine valeur a ajouter dans le tableau de sequence
    const nextFib =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextFib);
  }
  return fibSequence;
}
