import React from 'react';
import Component from '../src/Main';
import { storiesOf } from '@storybook/react';

storiesOf('Component', module)
    .add('my first presentational component', () => (
        <Component name="First" />
    ))
    .add('my second presentational component', () => (
        <Component name="Second" />
    ))