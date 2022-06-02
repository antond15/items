import React from 'react';
import {
  Stack,
  Image,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  IconButton,
  Tooltip,
  Link,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaSave } from 'react-icons/fa';
import { ItemProps } from '../../typings/item';

const ItemImage: React.FC<ItemProps> = (props) => {
  return (
    <Stack w="100px" h="125px" background="gray.700" borderColor="gray.600" borderRadius={5} overflow="hidden" spacing={0}>
      <Image src={props.source} alt={props.label} w="100px" h="100px" objectFit="contain" />
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box h="25px" color="gray.300" background="gray.600">
            {props.label}
          </Box>
        </PopoverTrigger>
        <PopoverContent textAlign="left" bg="gray.700" borderColor="gray.500">
          <PopoverArrow bg="gray.700" />
          <PopoverHeader fontWeight="semibold" color="gray.300" border="none" pb={0}>
            {props.label}
          </PopoverHeader>
          <PopoverBody color="gray.100">
            <Box>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, culpa.</Box>
          </PopoverBody>
          <PopoverFooter borderColor="gray.500">
            <ButtonGroup size="sm">
              <Tooltip hasArrow label="Open source" bg="gray.300" color="black">
                <Link href={props.source} isExternal>
                  <IconButton colorScheme="gray" aria-label="Open source" icon={<FaExternalLinkAlt />} />
                </Link>
              </Tooltip>
              <Tooltip hasArrow label="Save image" bg="gray.300" color="black">
                <IconButton colorScheme="green" aria-label="Save image" icon={<FaSave />} />
              </Tooltip>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

export default ItemImage;
