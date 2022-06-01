import React from 'react';
import { SimpleGrid, Image, Flex, Box } from '@chakra-ui/react';
import { items } from '../../data/items';

const MainGrid: React.FC = () => {
  return (
    <Flex justifyContent="center">
      <Box w="2xl" h={800} mb={5} mt={5} overflowY="scroll" background="gray.800" borderRadius={5} border="solid 15px" borderColor="gray.800">
        <Flex justifyContent="center">
          <SimpleGrid columns={5} spacingX="10px" spacingY="10px" w="fit-content">
            {items.map((data) => (
              <Image
                src={data.source}
                alt={data.label}
                w="100px"
                h="100px"
                objectFit="cover"
                background="gray.700"
                border="solid 1px"
                borderColor="gray.600"
                borderRadius={5}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MainGrid;
