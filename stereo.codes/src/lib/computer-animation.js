import { TweenLite, TimelineLite } from 'gsap';

const anmation = {};

anmation.show = (el) => {
  const cirleG = el.querySelectorAll('#SvgjsG1008 circle');
  const computer = el.querySelector('#SvgjsG1023');
  const cartridge = el.querySelector('#SvgjsG1052');
  const cartridgeSleeve = el.querySelector('#SvgjsPath1066');
  const animationTimeline = new TimelineLite();

  // setup
  animationTimeline.set(computer, {y: 800});
  animationTimeline.set(cartridge, {x: 0, y: 0, opacity: 0});
  animationTimeline.set(cirleG[0], {scale: 0, transformOrigin:"center center"});
  animationTimeline.set(cirleG[1], {scale: 0, transformOrigin:"center center"});
  animationTimeline.set(cartridgeSleeve, {x: -40});

  // circles
  animationTimeline
  .to(cirleG[0], .7, {scale: 1, delay: .5, transformOrigin:"center center", ease: 'Expo.easeOut'})
  .to(cirleG[1], .7, {scale: 1, delay: .5, transformOrigin:"center center", ease: 'Expo.easeOut'}, 0);

  // computer
  animationTimeline
  .to(computer, 1.4, {y: 0, delay: .2, ease: 'Expo.easeInOut' }, 0);

  // cartridge sleeve
  animationTimeline
  .to(cartridgeSleeve, 1, {x: 0, ease: 'Expo.easeOut'}, 1);

  // cartridge move
  animationTimeline
  .to(cartridge, .5, {opacity: 1}, 0)
  .to(cartridge, 1.3, {x: 280, y: 0, ease: 'Expo.easeInOut' }, 0)
  .to(cartridge, .8, {y: 250, ease: 'Back.easeOut' }, 1.3);
}

export default anmation;