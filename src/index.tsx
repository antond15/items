import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import App from './components/App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
