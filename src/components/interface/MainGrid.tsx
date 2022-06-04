import React from 'react';
import { SimpleGrid, Flex, Box } from '@chakra-ui/react';
import Item from '../item/Item';

type Props = {
  items: string[];
};

const MainGrid: React.FC<Props> = (props) => {
  return (
    <Flex justifyContent="center">
      <Box w="2xl" h={800} mb={5} mt={2} overflowY="auto" background="gray.800" borderRadius={5} border="solid 15px" borderColor="gray.800">
        <Flex justifyContent="center">
          <SimpleGrid columns={5} spacingX="5px" spacingY="5px" w="fit-content">
            {props.items.map((name, key) => {
              return <Item key={key} name={name} />;
            })}
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MainGrid;
