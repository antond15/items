import React from 'react';
import { SimpleGrid, Flex, Box } from '@chakra-ui/react';
import Item from '../item/Item';
import { items } from '../../data/items';

const MainGrid: React.FC = () => {
  return (
    <Flex justifyContent="center">
      <Box w="2xl" h={800} mb={5} mt={5} overflowY="scroll" background="gray.800" borderRadius={5} border="solid 15px" borderColor="gray.800">
        <Flex justifyContent="center">
          <SimpleGrid columns={5} spacingX="5px" spacingY="5px" w="fit-content">
            {items.map((data) => (
              <Item {...data} />
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MainGrid;
