export const rgbtohsl = (r, g, b) => {
  r /= 255, g /= 255, b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }
  return [(h*100+0.5)|0, ((s*100+0.5)|0), ((l*100+0.5)|0)];
}

export const hextorgb = (hex) => {
  const hexformatted = hex.replace(/#/, '');
  const rgb = [];

  for(let i = 0; i < 6; i+=2) {
    rgb.push(parseInt(hexformatted.substr(i,2), 16)) // the magic
  }

  return rgb;
}
