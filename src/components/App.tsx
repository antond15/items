import React from 'react';
import { Box } from '@chakra-ui/react';
import MainGrid from './interface/MainGrid';
import SearchBar from './interface/SearchBar';

const App: React.FC = () => {
  return (
    <Box textAlign="center" minH="100vh" background="gray.900">
      <SearchBar />
      <MainGrid />
    </Box>
  );
};

export default App;
