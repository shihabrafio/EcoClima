import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Countries from '../components/Countries';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Countries', () => {
  it('render Countries Components', () => {
    render(<Countries />);
    expect(Countries).toMatchSnapshot();
  });
});
