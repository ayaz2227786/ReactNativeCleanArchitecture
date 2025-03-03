import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from './presentation/navigation/AppNavigator';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
};

export default App;
