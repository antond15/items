import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import MainGrid from './interface/MainGrid';
import SearchBar from './interface/SearchBar';
import { itemData } from '../data/items';

const App: React.FC = () => {
  const [items, setItems] = useState(Object.keys(itemData));

  return (
    <Box textAlign="center" minH="100vh" background="gray.900">
      <SearchBar setItems={setItems} />
      <MainGrid items={items} />
    </Box>
  );
};

export default App;
