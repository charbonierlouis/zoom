export function calcPourcent(
  offset: number,
  size: number,
  position: number,
) {
  let pourcent = position - offset;
  pourcent *= 100;
  pourcent /= size;
  return pourcent;
}
