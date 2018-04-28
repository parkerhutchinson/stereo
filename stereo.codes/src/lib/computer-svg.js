import ReactDOM from 'react-dom';
const SVG = require('svg.js');
try {
  require('svg.easing.js');
  require('svg.filter.js');
} catch(error) {
  
}

const config = {
  width: 530,
  height: 530,
  lineCount: 90,
  color: {
    stormy: '#2c2e47',
    snow: '#fff',
    radish: '#F10044',
    woz: '#eee',
  },
  gradient: ['#F10044', '#E60074', '#1B0064'],
  image: 'https://thumbs.gfycat.com/RingedDistantIcefish-size_restricted.gif',
}
// bootstrap
const introSVG = (elem) => {
  const domElem = document.createElement('div');
  const draw = SVG(domElem);

  draw.viewbox(0, 0, config.width, config.height);
  // construct scene
  circleLinesSVG(draw);
  computerSVG(draw);
  computerCartridge(draw);

  // render svg
  ReactDOM.findDOMNode(elem).append(domElem);

  return true;
}

// circles animation group
const circleLinesSVG = (draw) => {
  const circleG = draw.group();
  const maskCircle = draw.mask();

  const circleMiniGradient = draw
  .gradient('linear', (stop) => {
    stop.at({ offset: .2, color: config.gradient[0]})
    stop.at({ offset: .5, color: config.gradient[1]})
    stop.at({ offset: .8, color: config.gradient[2]})
  })
  .from(0,-0.5).to(0,1);

  const circleM = draw
  .circle(0)
  .attr({fill: config.color.snow})
  .center(config.width / 2, config.height /2);
  circleM.animate({delay: 200, duration: 400, ease: 'expoOut'}).radius(config.width / 2 + 40);

  const circleMini = draw
  .circle(config.width - 130)
  .attr({fill: circleMiniGradient})
  .center(config.width / 2, config.height /2);

  const circleMiniShadow = draw
  .circle(config.width - 130)
  .attr({fill: config.color.stormy, opacity: '.3'})
  .center(config.width / 2, config.height /2);

  // filter 'drop shadow' aka blur
  circleMiniShadow.filter(function(add) {
    const blur = add.offset(6, 6).in(add.sourceAlpha).gaussianBlur(20);

    add.blend(add.source, blur);
    return true;
  });

  circleMini.radius(0);
  circleMini.animate({delay: 200, ease: 'expoOut'}).radius(config.width - 315);

  circleMiniShadow.radius(0);
  circleMiniShadow.animate({delay: 200, ease: 'expoOut'}).radius(config.width - 315);

  // add circle and circle shadow to line group
  circleG.add(circleMiniShadow);
  circleG.add(circleMini);
  // add items to mask

  maskCircle.add(circleM);
  circleG.maskWith(maskCircle);
}

// computer animation group
const computerSVG = (draw) => {
  const computer = draw.group();
  const computerLogoG = draw.group();
  const computerG = draw.group();
  const maskComputer = draw.mask();
  const maskImage = draw.mask();
  const maskComputerG = draw.group();
  const image = draw.image(config.image, 390, 590).center(config.width / 2, 150);

  const computerScreenBevelBG = draw
  .gradient('linear', (stop) => {
    stop.at({ offset: 0, color: '#000', opacity: .2})
    stop.at({ offset: 1, color: '#555', opacity: .1})
  })
  .from(0, 0).to(1, 1);

  const computerScreenGloss = draw
  .gradient('linear', (stop) => {
    stop.at({ offset: .1, color: '#ccc', opacity: .3})
    stop.at({ offset: 1, color: '#ccc', opacity: .1})
  })
  .from(0, 0).to(.7, 1);

  const imageM = draw
  .rect(233, 180)
  .attr({fill: config.color.snow})
  .radius(10)
  .center(config.width / 2, 150);

  const circleMiniM = draw
  .circle(config.width - 100)
  .attr({fill: config.color.snow})
  .center(config.width / 2, config.height /2);

  const logoText = draw.text('STEREO CODES');
  logoText.font({
    family: 'courier',
    size: '9'
  });
  logoText.move(40, 5);

  const logoCircleL = draw
  .circle(20)
  .attr({fill: config.color.stormy})
  .move(0, 0)

  const logoCircleR = draw
  .circle(20)
  .attr({fill: config.color.radish})
  .move(10, 0);

  const computerBG = draw
  .rect(config.width - 163, config.height)
  .radius(15)
  .attr({ fill: '#D8D8D8' })
  .center(config.width / 2, config.height / 2);

  const computerScreen = draw
  .rect(244, 193)
  .radius(15)
  .attr({fill: 'black'})
  .center(config.width / 2, 149)

  const computerScreenBevel = draw
  .rect(276, 218)
  .radius(15)
  .attr({fill: computerScreenBevelBG})
  .center(config.width / 2, 148)

  const rectM = draw
  .rect(config.width - 163, config.height - 200)
  .radius(15)
  .attr({ fill: 'white' })
  .center(config.width / 2, config.height / 2 - 100);

  computerLogoG.add(logoCircleL);
  computerLogoG.add(logoCircleR);
  computerLogoG.add(logoText);
  computerLogoG.move(120, config.height - 190);

  maskImage.add(imageM);
  image.maskWith(maskImage);
  computerG.add(computerBG.clone().attr({fill: config.color.woz}));
  computerG.add(computerBG);
  computerG.add(computerScreenBevel);
  computerG.add(computerScreen);
  computerG.add(image);
  computerG.add(computerLogoG);
  computerG.add(computerScreen.clone().attr({fill: computerScreenGloss}));
  computerG.move(0, 500)
  computerG.animate({duration: 1000, ease: 'expoOut', delay: 600}).move(0,20);

  computer.add(computerG);

  maskComputerG.add(circleMiniM);
  maskComputerG.add(rectM);
  maskComputer.add(maskComputerG);

  computer.maskWith(maskComputer);

}

const computerCartridge = (draw) =>{
  const cartridge = draw.group();

  const cartridgeBG = draw.gradient('linear', (stop) => {
    stop.at({ offset: 0, color: config.color.radish, opacity: .7})
    stop.at({ offset: 1, color: config.color.radish, opacity: .7})
  })
  .from(0, 0).to(0, 1);

  const partIndentBG = draw.gradient('linear', (stop) => {
    stop.at({ offset: 0, color: '#000', opacity: .1 })
    stop.at({ offset: 1, color: '#000', opacity: .1 })
  })
  .from(0,0).to(0,1);

  const cartridgeShadow =
  draw.path('M361.747059,547.291209 L327.024427,547.291209 L324.252388,544.667497 L316.464277,544.667497 L313.84514,542.675824 L300.5,542.675824 L300.5,732.799499 L306.298098,737.5 L489.435947,737.5 L494.5,732.819105 L494.5,550.297133 L486.05326,540.5 L479.983795,540.5 L475.903074,542.675824 L463.61098,542.675824 L459.960246,546.480683 L454.205882,546.480683 L454.205882,547.291209 L410.541176,547.291209 L410.541176,604.587912 L361.747059,604.587912 L361.747059,547.291209 Z');
  cartridgeShadow.attr({ fill: '#2C2E47', opacity: .3 });
  cartridgeShadow.move(0, 0);

  cartridgeShadow.filter(function(add) {
    const blur = add.offset(6, 6).in(add.sourceAlpha).gaussianBlur(10);

    add.blend(add.source, blur);
    this.size('200%','200%').move(0, 0);
    return true;
  });

  const cartridgePath =
  draw.path('M600.747059,349.291209 L566.024427,349.291209 L563.252388,346.667497 L555.464277,346.667497 L552.84514,344.675824 L539.5,344.675824 L539.5,534.799499 L545.298098,539.5 L728.435947,539.5 L733.5,534.819105 L733.5,352.297133 L725.05326,342.5 L718.983795,342.5 L714.903074,344.675824 L702.61098,344.675824 L698.960246,348.480683 L693.205882,348.480683 L693.205882,349.291209 L649.541176,349.291209 L649.541176,409.587912 L600.747059,409.587912 L600.747059,349.291209 Z M723.176471,515.565934 L732.588235,515.565934 L732.588235,524.181319 L723.176471,524.181319 L723.176471,515.565934 Z');
  cartridgePath.stroke({ color: config.color.radish, width: 1, linejoin: 'round' });
  cartridgePath.attr({ fill: cartridgeBG });
  cartridgePath.move(0, 0);

  const protectiveSleeveBG = draw.path('M492.196162,38.8417757 L492.196162,99.889564 L540.170576,99.889564 L540.170576,38.8417757 L577.051526,38.8417757 L584,38.8991637 L584,90 C584,95.5228475 579.522847,100 574,100 L450,100 C444.477153,100 440,95.5228475 440,90 L440,35 L443.500137,35 L445.78657,37.1071674 L453.26078,37.1071674 L455.908981,38.8417757 L492.196162,38.8417757 Z');
  protectiveSleeveBG.attr({fill: partIndentBG});
  protectiveSleeveBG.move(10, 2);

  const protectiveSleeve = draw.path('M311,35 L418,35 L418,90 C418,95.5228475 413.522847,100 408,100 L321,100 C315.477153,100 311,95.5228475 311,90 L311,35 Z M377.36829,43.3055556 L377.36829,90.9722222 L400.532162,90.9722222 L400.532162,43.3055556 L377.36829,43.3055556 Z');
  protectiveSleeve.attr({fill: '#2F2F2F'});
  protectiveSleeve.stroke({ color: '#2F2F2F', width: 1, linejoin: 'round' });
  protectiveSleeve.move(10, 2)
  protectiveSleeve.animate({duration: 1000, ease: 'expoOut', delay: 600}).move(50,2);

  const labelSpot = draw.path('M310,326 L462,326 C467.522847,326 472,330.477153 472,336 L472,441 L300,441 L300,336 C300,330.477153 304.477153,326 310,326 Z');
  labelSpot.attr({fill: partIndentBG});
  labelSpot.move(10, 83);

  const label = draw.path('M10,0 L157,0 C162.522847,-1.01453063e-15 167,4.4771525 167,10 L167,112 L0,112 L0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z');
  label.attr({fill: '#EAE5E5'})
  label.move(12, 86);

  const labelTop = draw.path('M310,167 L457,167 C462.522847,167 467,171.477153 467,177 L467,191.363636 L300,191.363636 L300,177 C300,171.477153 304.477153,167 310,167 Z');
  labelTop.attr({fill: '#fff'});
  labelTop.move(12, 86);

  const labelHeaderText = draw.text('Hackz');
  labelHeaderText.font({
    family: 'courier',
    size: '9'
  });
  labelHeaderText.move(25, 94);

  const labelListOneText = draw.text('telnet towel.blinkenlights.nl');
  labelListOneText.font({
    family: 'courier',
    size: '8'
  });
  labelListOneText.move(25, 125);

  const labelListTwoText = draw.text('nmap -oS - scanme.nmap.org');
  labelListTwoText.font({
    family: 'courier',
    size: '8'
  });
  labelListTwoText.move(25, 145);

  const circleMini = draw
  .circle(150)
  .attr({fill: '#2F2F2F'})
  .move(20, 20);

  cartridge.add(cartridgeShadow);
  cartridge.add(circleMini);
  cartridge.add(cartridgePath);
  cartridge.add(protectiveSleeveBG);
  cartridge.add(protectiveSleeve);
  cartridge.add(labelSpot);
  cartridge.add(label);
  cartridge.add(labelTop);
  cartridge.add(labelHeaderText);
  cartridge.add(labelListOneText);
  cartridge.add(labelListTwoText);
  cartridge.scale(.99, 1);
  cartridge.move(200, 100).attr({opacity: 0});
  cartridge.animate({duration: 800, ease: 'expoOut'}).move(300, 100).attr({opacity: 1})
  cartridge.animate({duration: 800, ease: 'backOut'}).move(300, 200);
}

export default introSVG;
