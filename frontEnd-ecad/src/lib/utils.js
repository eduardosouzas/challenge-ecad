export function minMaxRange(numberValue, min, max) {
  if (numberValue > max) {
    return max;
  } if (numberValue < min) {
    return min;
  }
  return numberValue;
}
