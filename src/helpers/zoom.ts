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

export function calcImagePourcentX(
  element: HTMLDivElement,
  cursorX: number,
) {
  const { offsetLeft, clientWidth } = element;
  return calcPourcent(offsetLeft, clientWidth, cursorX);
}

export function calcImagePourcentY(
  element: HTMLDivElement,
  cursorY: number,
) {
  const { offsetTop, clientHeight } = element;
  return calcPourcent(offsetTop, clientHeight, cursorY);
}
