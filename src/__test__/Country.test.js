import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Country from '../components/Country';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Country', () => {
  it('render Country Components', () => {
    render(<Country />);
    expect(Country).toMatchSnapshot();
  });
});
