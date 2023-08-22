export function getRandomColors(): any {
  const bgColor = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
  let fgColor;

  do {
    fgColor = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
  } while (fgColor.toString() === bgColor.toString());

  // Check for high contrast using WCAG contrast formula
  const bgLuminance =
    (0.299 * bgColor[0] + 0.587 * bgColor[1] + 0.114 * bgColor[2]) / 255;
  const fgLuminance =
    (0.299 * fgColor[0] + 0.587 * fgColor[1] + 0.114 * fgColor[2]) / 255;
  const contrast =
    bgLuminance > fgLuminance
      ? (bgLuminance + 0.05) / (fgLuminance + 0.05)
      : (fgLuminance + 0.05) / (bgLuminance + 0.05);

  if (contrast < 4.5) {
    return getRandomColors();
  }

  return {
    bgColor: `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`,
    fgColor: `rgb(${fgColor[0]}, ${fgColor[1]}, ${fgColor[2]})`,
  };
}
