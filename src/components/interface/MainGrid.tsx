import React from 'react';
import {
  SimpleGrid,
  Image,
  Flex,
  Box,
  Stack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverHeader,
} from '@chakra-ui/react';
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
                <Popover trigger="hover">
                  <PopoverTrigger>
                    <Box h="25px" color="gray.300" background="gray.600">
                      {data.label}
                    </Box>
                  </PopoverTrigger>
                  <PopoverContent textAlign="left">
                    <PopoverArrow />
                    <PopoverHeader fontWeight="semibold">{data.label}</PopoverHeader>
                    <PopoverBody>
                      <Box>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, culpa.</Box>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Stack>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MainGrid;
