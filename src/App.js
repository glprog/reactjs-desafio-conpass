import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import Wrapper from './Wrapper';

import './config/ReactotronConfig';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <Wrapper />
      </PersistGate>
    </Provider>
  );
}

export default App;
