import React from 'react';

import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';

import {StatusBar} from 'react-native';
import theme from 'core/config/theme';
import Routes from 'routes';

const App: React.FC = () => {
  console.log('theme', theme);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.primary}
          />
          <Routes />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
