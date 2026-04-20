// src/app/providers.tsx
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../shared/lib/queryClient';
// import { SocketProvider } from '../shared/lib/socket'; // Agregar tu SocketProvider si lo usas

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <SocketProvider> */}
        {children}
      {/* </SocketProvider> */}
    </QueryClientProvider>
  );
};

export default Providers;