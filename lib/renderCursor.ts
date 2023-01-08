import hexToRgb from '@/lib/hexToRgb';

const renderCursor = (strokeWidth: number, cssColor: string): string => {
  if (cssColor.length === 7) cssColor = hexToRgb(cssColor);
  else if (cssColor === '#fff') cssColor = 'rgb(255,255,255)';
  const halfStrokeWidth = strokeWidth / 2;

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' fill='${cssColor}' width='${strokeWidth}' height='${strokeWidth}'>` +
    `<circle cx='${halfStrokeWidth}' cy='${halfStrokeWidth}' r='${halfStrokeWidth}' stroke-width='${cssColor === 'rgb(255,255,255)' ? 1 : 0}' stroke='black'/></svg>`;
  return `url("data:image/svg+xml;utf8, ${svg}") ${halfStrokeWidth} ${halfStrokeWidth}, auto`;
};

export default renderCursor;
