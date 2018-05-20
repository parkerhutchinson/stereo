import { TweenLite, TimelineLite } from 'gsap';

const anmation = {};

anmation.show = (el) => {
  const cirleG = el.querySelector('#SvgjsG1008');
  const animationTimeline = new TimelineLite();
  animationTimeline
  .to(cirleG, 0, {scale: 0, transformOrigin: '50%'}, 'easeOut')
  .to(cirleG, 1, {scale: 1, delay: 1, transformOrigin: '50%'}, 'easeOut');
}

anmation.hide = (el) => {
  const cirleG = el.querySelector('#SvgjsG1008');
  TweenLite.to(cirleG, 0, {scale: 0 }, 'easeOut').progress(0);
}

export default anmation;