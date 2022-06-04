import React, { useState } from 'react';
import {
  Flex,
  Box,
  Input,
  IconButton,
  HStack,
  MenuButton,
  Menu,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Tag,
  MenuDivider,
} from '@chakra-ui/react';
import { FaSortAlphaDown, FaSortAlphaUp, FaFilter } from 'react-icons/fa';
import { itemData } from '../../data/items';
import { tagData } from '../../data/tags';

type Props = {
  setItems: (items: string[]) => void;
};

const SearchBar: React.FC<Props> = (props) => {
  const [ascending, setAscending] = useState(true);
  const tagDataArr = Object.keys(tagData);

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
          <Menu closeOnSelect={false}>
            <MenuButton as={IconButton} size="sm" aria-label="Filter options" fontSize="md" icon={<FaFilter />} />
            <MenuList bg="gray.700" borderColor="gray.500" color="gray.100">
              <MenuOptionGroup type="radio" title="Order" textAlign="left" defaultValue="asc">
                <MenuItemOption _hover={{ bg: 'gray.600' }} _focus={{ bg: 'gray.600' }} value="asc" onClick={() => setAscending(true)}>
                  <HStack justify="space-between">
                    <span>Ascending</span>
                    <FaSortAlphaDown />
                  </HStack>
                </MenuItemOption>
                <MenuItemOption _hover={{ bg: 'gray.600' }} _focus={{ bg: 'gray.600' }} value="desc" onClick={() => setAscending(false)}>
                  <HStack justify="space-between">
                    <span>Descending</span>
                    <FaSortAlphaUp />
                  </HStack>
                </MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup type="checkbox" title="Tags" textAlign="left" defaultValue={tagDataArr}>
                {tagDataArr.map((name, key) => {
                  const tag = tagData[name];
                  return (
                    <MenuItemOption key={key} _hover={{ bg: 'gray.600' }} _focus={{ bg: 'gray.600' }} value={name} lineHeight={1}>
                      <Tag size="sm" bg={tag.color}>
                        {tag.label}
                      </Tag>
                    </MenuItemOption>
                  );
                })}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </Flex>
  );
};

export default SearchBar;
