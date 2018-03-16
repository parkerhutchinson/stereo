import React from 'react';

import { storiesOf } from '@storybook/react';

import Divider from '../src/components/01_atoms/Divider';

storiesOf('Atoms/Divider', module)
  .add('with label', () => <Divider label="hello world"/>)


storiesOf('Atoms/Divider', module)
  .add('without label', () => <Divider />)