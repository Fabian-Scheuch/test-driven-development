export function calcPoints(hits: string): number {
  if (hits.trim() === '') {
    return 0;
  }

  const hitsArray = hits.split(' ');
  let points = 0;

  for (let i = 0; i < hitsArray.length; i += 2) {
    const multiplier = parseInt(hitsArray[i], 10);
    const target = parseInt(hitsArray[i + 1], 10);

    if (isNaN(multiplier) || isNaN(target)) {
      continue;
    }

    points += multiplier * target;
  }

  return points;
}

export function possibleCheckout(x: number): string {
  const remainingPoints = 501 - x;

  if (remainingPoints <= 0) {
    return 'Impossible';
  }

  if (remainingPoints % 2 === 0 && remainingPoints / 2 <= 20) {
    return `Double ${remainingPoints / 2}`;
  }

  return 'Impossible';
}
