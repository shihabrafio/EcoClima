import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainPage from '../components/WeatherApp';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('MainPage', () => {
  it('render MainPage Components', () => {
    render(<MainPage />);
    expect(MainPage).toMatchSnapshot();
  });
});
