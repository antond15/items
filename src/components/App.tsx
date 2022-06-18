import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import MainGrid from './interface/MainGrid';
import SearchBar from './interface/SearchBar';
import { itemData } from '../data/items';

const App: React.FC = () => {
  const [items, setItems] = useState(Object.keys(itemData));

  return (
    <Flex textAlign="center" justifyContent="center" minH="100vh" background="gray.900">
      <Box w="fit-content">
        <SearchBar setItems={setItems} />
        <MainGrid items={items} />
      </Box>
    </Flex>
  );
};

export default App;
