import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Header from '../components/Header';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Header', () => {
  it('render Header Components', () => {
    render(<Header />);
    expect(Header).toMatchSnapshot();
  });
});
