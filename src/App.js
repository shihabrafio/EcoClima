import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Details from './components/details';
import MainPage from './components/main';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/world/:cityId"
            element={<Details />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
