import React, { useState } from 'react';
import { Flex, Box, Input, IconButton, HStack } from '@chakra-ui/react';
import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';
import { itemData } from '../../data/items';

type Props = {
  setItems: (items: string[]) => void;
};

const SearchBar: React.FC<Props> = (props) => {
  const [ascending, setAscending] = useState(true);

  const handleSearch = (e: any) => {
    const query = e.target.value.toLowerCase();
    const result = Object.keys(itemData).filter((key) => {
      const item = itemData[key];
      return item.label.toLowerCase().includes(query) /* || item.description?.includes(query) */;
    });
    props.setItems(result);
  };

  return (
    <Flex justifyContent="center" alignContent="center">
      <Box w="2xl" mt={5}>
        <HStack spacing={1}>
          <Input
            size="sm"
            placeholder="Search images..."
            w="smaller"
            color="currentcolor"
            bg="gray.200"
            border="none"
            borderRadius={5}
            onChange={handleSearch}
          />
          <IconButton
            size="sm"
            aria-label="Search"
            fontSize="lg"
            icon={ascending ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
            onClick={() => setAscending(!ascending)}
          />
        </HStack>
      </Box>
    </Flex>
  );
};

export default SearchBar;
