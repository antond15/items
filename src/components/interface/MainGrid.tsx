import React from 'react';
import { SimpleGrid, Image, Flex, Box, Stack } from '@chakra-ui/react';
import { items } from '../../data/items';

const MainGrid: React.FC = () => {
  return (
    <Flex justifyContent="center">
      <Box w="2xl" h={800} mb={5} mt={5} overflowY="scroll" background="gray.800" borderRadius={5} border="solid 15px" borderColor="gray.800">
        <Flex justifyContent="center">
          <SimpleGrid columns={5} spacingX="5px" spacingY="5px" w="fit-content">
            {items.map((data) => (
              <Stack w="100px" h="125px" background="gray.700" borderColor="gray.600" borderRadius={5} overflow="hidden" spacing={0}>
                <Image src={data.source} alt={data.label} w="100px" h="100px" objectFit="contain" />
                <Box h="25px" color="gray.300" background="gray.600">
                  {data.label}
                </Box>
              </Stack>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MainGrid;
