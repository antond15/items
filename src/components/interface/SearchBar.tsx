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
  Tooltip,
  Link,
} from '@chakra-ui/react';
import { FaSortAlphaDown, FaSortAlphaUp, FaFilter, FaGithub } from 'react-icons/fa';
import { itemData } from '../../data/items';
import { tagData } from '../../data/tags';

type Props = {
  setItems: (items: string[]) => void;
};

const SearchBar: React.FC<Props> = (props) => {
  const itemDataArr = Object.keys(itemData);
  const tagDataArr = Object.keys(tagData);

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

    props.setItems(result);
  // eslint-disable-next-line
  }, [query, order, tags]);

  return (
    <Flex justifyContent="center" alignContent="center">
      <Flex w="100%" mt={5} justifyContent='space-between'>
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
              <MenuButton as={IconButton} aria-label="Filter options" icon={<FaFilter />} size="sm" fontSize="md" />
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
        <Tooltip hasArrow label="Source code" bg="gray.300" color="black">
          <Link href='https://github.com/antond15/items' isExternal>
            <IconButton aria-label='Source code' icon={<FaGithub/>} size="sm" fontSize="xl" />
          </Link>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default SearchBar;
