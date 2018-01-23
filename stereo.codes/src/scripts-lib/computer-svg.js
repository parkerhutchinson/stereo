import ReactDOM from 'react-dom';
const SVG = require('svg.js');
try {
  require('svg.easing.js');
  require('svg.filter.js');
} catch(error) {

}

const config = {
  width: 500,
  height: 500,
  lineCount: 90,
  color: {
    stormy: '#2c2e47',
    snow: '#fff',
    woz: '#eee',
  },
  image: 'https://media.giphy.com/media/MGaacoiAlAti0/giphy.gif',
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

  const circleM = draw
  .circle(0)
  .attr({fill: config.color.snow})
  .center(config.width / 2, config.height /2);
  circleM.animate({delay: 200, duration: 400, ease: 'expoOut'}).radius(config.width / 2);
  const circleMini = draw
  .circle(config.width - 100)
  .attr({fill: config.color.stormy})
  .center(config.width / 2, config.height /2);

  const circleMiniShadow = draw
  .circle(config.width - 100)
  .attr({fill: config.color.stormy, opacity: '.3'})
  .center(config.width / 2, config.height /2);

  // filter 'drop shadow' aka blur
  circleMiniShadow.filter(function(add) {
    const blur = add.offset(10, 10).in(add.sourceAlpha).gaussianBlur(8);

    add.blend(add.source, blur);
    this.size('200%','200%').move(0, 0);
    return true;
  });

  // diagonal lines
  for(let i = 0; i < config.lineCount; i++) {
      const pos = {
        xd: -config.width + i * 10,
        yd: i + 10
      }
      const line = draw
      .line(0, 0, config.width, config.height )
      .move(pos.xd, 0);

      line.stroke({ color: config.color.stormy, width: 1, linecap: 'round' });

      // experimental animation
      // let lineAttr = line.attr();
      // line.attr({opacity: 0});
      // line.animate({duration: '.2s', delay: i * 1}).attr({opacity: 1});

      circleG.add(line);
  }
  circleMini.radius(0);
  circleMini.animate({delay: 200, ease: 'expoOut'}).radius(config.width - 300);

  circleMiniShadow.radius(0);
  circleMiniShadow.animate({delay: 200, ease: 'expoOut'}).radius(config.width - 300);

  // add circle and circle shadow to line group
  circleG.add(circleMiniShadow);
  circleG.add(circleMini);

  // add items to mask

  maskCircle.add(circleM);

  circleG.maskWith(maskCircle);

  return circleG;
}

// computer animation group
const computerSVG = (draw) => {
  const computer = draw.group();
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
    stop.at({ offset: 0, color: '#000', opacity: .8})
    stop.at({ offset: 1, color: '#555', opacity: .1})
  })
  .from(0, 0).to(1, 1);
  const imageM = draw
  .rect(250, 180)
  .attr({fill: config.color.snow})
  .radius(15)
  .center(config.width / 2, 150);

  const circleMiniM = draw
  .circle(config.width - 100)
  .attr({fill: config.color.snow})
  .center(config.width / 2, config.height /2);

  const computerBGGradient = draw
  .gradient('linear', (stop) => {
    stop.at({ offset: 0, color: '#666', opacity: .2})
    stop.at({ offset: .5, color: '#666', opacity: .2})
    stop.at({ offset: 1, color: '#000', opacity: .4})
  })
  .from(0,0).to(0,1);

  const computerBG = draw
  .rect(config.width - 150, config.height)
  .radius(15)
  .attr({ fill: computerBGGradient })
  .center(config.width / 2, config.height / 2);

  const computerScreen = draw
  .rect(261, 193)
  .radius(15)
  .attr({fill: 'black'})
  .center(config.width / 2, 149)

  const computerScreenBevel = draw
  .rect(286, 218)
  .radius(15)
  .attr({fill: computerScreenBevelBG})
  .center(config.width / 2, 148)

  const computerCartridgeSlot = draw
  .rect(120, 8)
  .attr({ fill: '#000', opacity: .4 })
  .move(260, 330);

  const rectM = draw
  .rect(config.width - 150, config.height - 200)
  .radius(15)
  .attr({ fill: 'white' })
  .center(config.width / 2, config.height / 2 - 100);

  maskImage.add(imageM);
  image.maskWith(maskImage);
  computerG.add(computerBG.clone().attr({fill: config.color.woz}));
  computerG.add(computerBG);
  computerG.add(computerCartridgeSlot);
  computerG.add(computerScreenBevel);
  computerG.add(computerScreen);
  computerG.add(image);
  computerG.add(computerScreen.clone().attr({fill: computerScreenGloss}));
  computerG.move(0, 500);
  computerG.animate({duration: 1000, ease: 'expoOut', delay: 600}).move(0,20);

  computer.add(computerG);

  maskComputerG.add(circleMiniM);
  maskComputerG.add(rectM);
  maskComputer.add(maskComputerG);

  computer.maskWith(maskComputer);

  return computer;
}

const computerCartridge = (draw) =>{
  const cartridge = draw.group();
  // const cartridgePoly = draw.polygon('0,20 0,40 20,50 60,60 50,100 40,60 0,50 40,40')
  return cartridge;
}

export default introSVG;
