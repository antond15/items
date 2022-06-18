import React, { useEffect, useState } from 'react';
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
  const itemDataArr = Object.keys(itemData);
  const tagDataArr = Object.keys(tagData);

  const setItems = props.setItems; // for convenience
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [tags, setTags] = useState(tagDataArr);

  const handleTags = (e: any) => {
    const name: string = e.currentTarget.value;
    if (e.currentTarget.ariaChecked === 'false') {
      setTags([...tags, name]);
    } else {
      setTags(tags.filter((tag) => tag !== name));
    }
  };

  useEffect(() => {
    const result = itemDataArr.filter((key) => {
      const item = itemData[key];
      return item.label.toLowerCase().includes(query) && item.tags.some((tag) => tags.includes(tag));
    });

    result.sort();
    if (order === 'desc') result.reverse();

    setItems(result);
  }, [query, order, tags]);

  return (
    <Flex justifyContent="center" alignContent="center">
      <Box w="100%" mt={5}>
        <HStack spacing={1}>
          <Input
            size="sm"
            placeholder="Search images..."
            w="smaller"
            color="currentcolor"
            bg="gray.200"
            border="none"
            borderRadius={5}
            onChange={(e: any) => setQuery(e.target.value.toLowerCase())}
          />
          <Box>
            <Menu closeOnSelect={false}>
              <MenuButton as={IconButton} size="sm" aria-label="Filter options" fontSize="md" icon={<FaFilter />} />
              <MenuList bg="gray.700" borderColor="gray.500" color="gray.100">
                <MenuOptionGroup type="radio" title="Order" textAlign="left" defaultValue="asc">
                  <MenuItemOption _hover={{ bg: 'gray.600' }} _focus={{ bg: 'gray.600' }} value="asc" onClick={() => setOrder('asc')}>
                    <HStack justify="space-between">
                      <span>Ascending</span>
                      <FaSortAlphaDown />
                    </HStack>
                  </MenuItemOption>
                  <MenuItemOption _hover={{ bg: 'gray.600' }} _focus={{ bg: 'gray.600' }} value="desc" onClick={() => setOrder('desc')}>
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
                      <MenuItemOption
                        _hover={{ bg: 'gray.600' }}
                        _focus={{ bg: 'gray.600' }}
                        _active={{ bg: 'gray.600' }}
                        lineHeight={1}
                        key={key}
                        value={name}
                        onClick={handleTags}
                      >
                        <Tag size="sm" bg={tag.color}>
                          {tag.label}
                        </Tag>
                      </MenuItemOption>
                    );
                  })}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};

export default SearchBar;
