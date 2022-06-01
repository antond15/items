import React from 'react';
import { Box } from '@chakra-ui/react';
import MainGrid from './interface/MainGrid';

const App: React.FC = () => {
  return (
    <Box textAlign="center" minH="100vh" background="gray.900">
      <MainGrid />
    </Box>
  );
};

export default App;
