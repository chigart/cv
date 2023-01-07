const renderCursor = (strokeWidth: number, color: string): string => {
  const halfStrokeWidth = strokeWidth / 2;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' fill='${color}' width='${strokeWidth}' height='${strokeWidth}'>` +
    `<circle cx='${halfStrokeWidth}' cy='${halfStrokeWidth}' r='${halfStrokeWidth}' stroke-width='${color === ' rgb(255,255,255)' ? 1 : 0}' stroke='black'/></svg>`;
  return `url("data:image/svg+xml;utf8, ${svg}") ${halfStrokeWidth} ${halfStrokeWidth}, auto`;
};

export default renderCursor;
