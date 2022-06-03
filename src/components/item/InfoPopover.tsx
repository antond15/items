import React from 'react';
import {
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
  Tag,
  Flex,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaSave } from 'react-icons/fa';
import { ItemProps } from '../../typings/item';
import { tags } from '../../data/tags';

const InfoPopover: React.FC<ItemProps> = (props) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box h="25px" color="gray.300" background="gray.600">
          {props.label}
        </Box>
      </PopoverTrigger>

      <PopoverContent textAlign="left" bg="gray.700" borderColor="gray.500">
        <PopoverArrow bg="gray.700" />

        <PopoverHeader fontWeight="semibold" color="gray.300" border="none">
          <>
            {props.label}
            <Flex mt={1.5} wrap="wrap">
              {props.tags.map((tagName, key) => {
                const tag = tags[tagName];
                return (
                  tag && (
                    <Tag key={key} size="sm" bg={tag.color} mr={0.5} mt={0.5}>
                      {tag.label}
                    </Tag>
                  )
                );
              })}
            </Flex>
          </>
        </PopoverHeader>

        {props.description && (
          <PopoverBody color="gray.100" pt={0}>
            <Box>{props.description}</Box>
          </PopoverBody>
        )}

        <PopoverFooter borderColor="gray.500">
          <ButtonGroup size="sm">
            <Tooltip hasArrow label="Open source" bg="gray.300" color="black">
              <Link href={props.source} isExternal>
                <IconButton colorScheme="gray" aria-label="Open source" icon={<FaExternalLinkAlt />} />
              </Link>
            </Tooltip>

            <Tooltip hasArrow label="Save image" bg="gray.300" color="black">
              <IconButton isDisabled colorScheme="green" aria-label="Save image" icon={<FaSave />} />
            </Tooltip>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default InfoPopover;
