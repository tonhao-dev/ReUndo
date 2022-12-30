import React from 'react';
import Providers from './src/providers';
import Home from './src/screens/Home';

const App = () => {
  return (
    <Providers>
      <Home />
    </Providers>
  );
};

export default App;
