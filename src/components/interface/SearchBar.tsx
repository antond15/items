import React, { useState } from 'react';
import { Flex, Box, Input, IconButton, HStack } from '@chakra-ui/react';
import { FaSearch, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  const [ascending, setAscending] = useState(true);

  return (
    <Flex justifyContent="center" alignContent="center">
      <Box w="2xl" mt={5}>
        <HStack spacing={1}>
          <Input size="sm" placeholder="Search images..." w="smaller" color="currentcolor" bg="gray.200" border="none" borderRadius={5} />
          <IconButton size="sm" aria-label="Search" icon={<FaSearch />} />
          <IconButton
            size="sm"
            aria-label="Search"
            icon={ascending ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
            onClick={() => setAscending(!ascending)}
          />
        </HStack>
      </Box>
    </Flex>
  );
};

export default SearchBar;
