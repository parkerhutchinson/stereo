import ReactDOM from 'react-dom';
const SVG = require('svg.js');
require('svg.easing.js');
require('svg.filter.js');

const config = {
  width: 500,
  height: 500,
  lineCount: 120,
  color: {
    stormy: '#2c2e47',
    snow: 'white',
  }
}

const introSVG = (elem) => {
  const dw = 500;
  const dh = 500;
  const domElem = document.createElement('div');
  const draw = SVG(domElem).size(config.width, config.height);

  // construct scene
  circleLinesSVG(draw);
  computerSVG(draw);

  // render svg
  ReactDOM.findDOMNode(elem).append(domElem);

  return true;
}

const circleLinesSVG = (draw) => {
  const circleG = draw.group();
  const maskCircle = draw.mask();

  const circleM = draw
  .circle(config.width)
  .attr({fill: config.color.snow});

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
      // line.attr({x1: lineAttr.x1, y1: lineAttr.y1, x2: 0, y2: 0});
      // line.animate({delay: i * 50}).attr({x1: lineAttr.x1, y1: lineAttr.y1, x2: lineAttr.x2, y2: lineAttr.y2});

      circleG.add(line);
  }

  // add circle and circle shadow to line group
  circleG.add(circleMiniShadow);
  circleG.add(circleMini);

  // add items to mask
  maskCircle.add(circleM);
  circleG.maskWith(maskCircle);

  return circleG;
}

const computerSVG = (draw) => {
  const computer = draw.group();
  const maskComputer = draw.mask();
  const maskComputerG = draw.group();

  const circleMiniM = draw
  .circle(config.width - 100)
  .attr({fill: config.color.snow})
  .center(config.width / 2, config.height /2);

  const computerBG = draw
  .rect(config.width - 150, config.height)
  .radius(20)
  .attr({ fill: '#CAC8BB' })
  .center(config.width / 2, config.height / 2);

  const computerCartridge = draw
  .rect(150, 10)
  .attr({ fill: '#363636' })
  .move(250, 300);

  const rectM = draw
  .rect(config.width - 150, config.height - 200)
  .radius(20)
  .attr({ fill: 'white' })
  .center(config.width / 2, config.height / 2 - 100);

  computer.add(computerBG);
  computer.add(computerCartridge);

  maskComputerG.add(circleMiniM);
  maskComputerG.add(rectM);
  maskComputer.add(maskComputerG);
  computer.maskWith(maskComputer);

  return computer;
}


export default introSVG;
