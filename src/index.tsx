import React from 'react';
import { render } from 'react-dom';

import './index.scss';
import App from './components/App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
