import { combineReducers } from 'redux';

const portfolioList = [
  {
    title: 'draftboard',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
  },
  {
    title: 'draftboard',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
    na: true,
  },
  {
    title: 'draftboard',
    stack: ['react', 'css3', 'html5'],
    position: 'Full Stack',
  },
]

const bgImages = [
  {
    label: 'test',
    image: './images/bg-work/lycoming-mobile.jpg',
  },
  {
    label: 'test two',
    image: './images/bg-work/draftboard-mobile.jpg',
  },
  {
    label: 'test two',
    image: './images/bg-work/draftboard-mobile.jpg',
  },
  {
    label: 'test',
    image: './images/bg-work/lim-mobile.jpg',
  },
  {
    label: 'test two',
    image: './images/bg-work/lycoming-mobile.jpg',
  },
  {
    label: 'test two',
    image: './images/bg-work/lim-mobile.jpg',
  },
];

const portfolio = (state = portfolioList) => {
  return state;
}

const workImages = (state = bgImages) => {
  return state;
}

const work = combineReducers({
  portfolio,
  workImages,
});

export default work;
