// src/app/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import Providers from './providers';

const App = () => {
  return (
    <Providers>

        <AppRouter />

    </Providers>
  );
};

export default App;