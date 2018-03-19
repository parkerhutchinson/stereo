import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from '../src/components/01_atoms/Logo';
import Divider from '../src/components/01_atoms/Divider';
import GallerySlide from '../src/components/01_atoms/GallerySlide';

import { MockProvider } from '../src/scripts-lib/MockProvider';

const image = "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-0.3.5&s=d5b622e2ea747f0eaa17e73a2040031a&auto=format&fit=crop&w=3254&q=80";

storiesOf('Atoms/Logo', module)
  .add('default', () => 
  <MockProvider>
    <Logo />
  </MockProvider>
  )

storiesOf('Atoms/Divider', module)
  .add('with label', () => <Divider label="hello world"/>)

storiesOf('Atoms/Divider', module)
  .add('without label', () => <Divider />)

storiesOf('Atoms/GallerySlide', module)
  .add('current', () => <GallerySlide  image={image} slideState={1}/>)

storiesOf('Atoms/GallerySlide', module)
  .add('next', () => <GallerySlide image={image} slideState={2}/>)

storiesOf('Atoms/GallerySlide', module)
  .add('last', () => <GallerySlide image={image} slideState={3}/>)

storiesOf('Atoms/GallerySlide', module)
  .add('inactive', () => <GallerySlide image={image} slideState={0}/>)
