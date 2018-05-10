import React from 'react';
import { storiesOf } from '@storybook/react';
import Gallery from '../src/components/03_organisms/Gallery';
import { MockProvider } from '../src/lib/MockProvider';
// import markdownDecorator from '../node_modules/storybook-addon-markdown';

const details = `
# The button component

### features
* One
* Two
* Three
`;

storiesOf('Organisms/Gallery', module)
.add('Default', () => 
    <MockProvider>
        <Gallery play={true} />
    </MockProvider>
    );