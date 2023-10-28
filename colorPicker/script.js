function generatePalette() {
    var baseColor = document.getElementById('baseColorPicker').value.substring(1);
    var palette = generateColorPalette(baseColor);
    displayPalette(palette);
  }
  
  function generateColorPalette(baseColor) {
    var baseRGB = hexToRGB(baseColor);
    var palette = [];
  
    for (var i = 0; i < 5; i++) {
      var newHue = (baseRGB.hue + 60 * i) % 360;
      var newLightness = Math.min(100, Math.max(0, baseRGB.lightness + 10 * i));
      var newColor = hslToHex(newHue, 100, newLightness);
      palette.push(newColor);
    }
  
    return palette;
  }
  
  function hexToRGB(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    var hsl = rgbToHSL(r, g, b);
    return { r: r, g: g, b: b, hue: hsl.hue, lightness: hsl.lightness };
  }
  
  function rgbToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
  
    return { hue: h * 360, saturation: s * 100, lightness: l * 100 };
  }
  
  function hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    var r, g, b;
  
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      var hue2rgb = function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
  
    return '#' + Math.round(r * 255).toString(16).padStart(2, '0') +
                 Math.round(g * 255).toString(16).padStart(2, '0') +
                 Math.round(b * 255).toString(16).padStart(2, '0');
  }
  
  function displayPalette(colors) {
    var paletteContainer = document.getElementById('colorPalette');
    paletteContainer.innerHTML = '';
    colors.forEach(function(color) {
      var colorBox = document.createElement('div');
      colorBox.className = 'colorBox';
      colorBox.style.backgroundColor = color;
      paletteContainer.appendChild(colorBox);
    });
  }