import 'react-native';
import React from 'react';
import App from '../src/App';

import {fireEvent, render, waitFor} from '@testing-library/react-native';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  const React = require('react');
  class Icon extends React.Component {
    render() {
      return React.createElement('Icon');
    }
  }

  Icon.loadFont = () => {};
  return Icon;
});
jest.mock('react-native-vector-icons/Feather', () => {
  const React = require('react');
  class Icon extends React.Component {
    render() {
      return React.createElement('Icon');
    }
  }
  Icon.loadFont = () => {};
  return Icon;
});
jest.mock('react-native-vector-icons/FontAwesome', () => {
  const React = require('react');
  class Icon extends React.Component {
    render() {
      return React.createElement('Icon');
    }
  }
  Icon.loadFont = () => {};
  return Icon;
});

it('should render an app', () => {
  render(<App />);
});

it('should load the homescreen view', async () => {
  const {getAllByTestId} = render(<App />);

  // contains stories
  expect(getAllByTestId('story')).toBeDefined();

  // contains posts
  expect(getAllByTestId('post')).toBeDefined();
});
