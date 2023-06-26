import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Details from '../components/details';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

test('renders the Details component', () => {
  useSelector.mockReturnValue([]);
  render(
    <Router>
      <Details />
    </Router>
  );
});
