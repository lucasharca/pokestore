import React, { useState, useCallback } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import { ThemeProvider } from 'styled-components';
import Modal from './components/Modal';

import fire from './styles/themes/fire';
import water from './styles/themes/water';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Home from './pages/Home';

import { store, persistor } from './store';

function App() {
  const [theme, setTheme] = useState(fire);

  const changeTheme = () => {
    setTheme(theme.title === 'fire' ? water : fire);
    console.log(theme);
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ModalProvider>
              <Modal />
            </ModalProvider>
            <Header />
            <Home changeTheme={changeTheme} />
            <GlobalStyle />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
