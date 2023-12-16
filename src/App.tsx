import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './navigaitons/RootStackNavigator';
import {Provider} from 'react-redux';
import {store} from './screens/old2/store/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryDelay: 1000 * 60,
        retryOnMount: true,
        refetchOnReconnect: true,
      },
    },
  });
  return (
    <NavigationContainer>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RootStackNavigator />
        </QueryClientProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
