import {View } from 'react-native';
import Navigate from './src/utils/navigate';
import { Login } from './src/components/Login/Login';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Navigate />
      </PersistGate>
    </Provider>
  );
}


