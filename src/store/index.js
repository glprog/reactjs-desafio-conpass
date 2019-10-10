import { persistStore } from 'redux-persist';
import { createStore } from 'redux';
import persistReducers from './persistReducers';
import rootReducer from './modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(persistReducers(rootReducer), enhancer);
const persistor = persistStore(store);

export { store, persistor };
