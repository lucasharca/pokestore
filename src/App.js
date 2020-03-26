import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import { ThemeProvider } from 'styled-components';
import Modal from './components/Modal';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Routes from './routes';

import { store, persistor } from './store';

const theme = {};

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ModalProvider>
              <Modal />
            </ModalProvider>
          </ThemeProvider>
          <Header />
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
