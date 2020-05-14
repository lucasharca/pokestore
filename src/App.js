import React, { useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import { ThemeProvider } from 'styled-components';
import Modal from './components/Modal';

import fire from './styles/themes/fire';
import water from './styles/themes/water';
import neutral from './styles/themes/neutral';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { ChangeProvider } from './hooks/Change';

import { store, persistor } from './store';

function App() {
  const [theme, setTheme] = useState(neutral);

  const changeTheme = () => {
    setTheme(theme.title !== 'fire' ? fire : water);
  };

  const chooseTheme = themeName => {
    setTheme(themeName !== 'fire' ? water : fire);
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ModalProvider>
              <Modal />
            </ModalProvider>
            <ChangeProvider chooseTheme={chooseTheme}>
              <Routes changeTheme={changeTheme} />
            </ChangeProvider>
            <GlobalStyle />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
