import { useEffect, useState } from 'react';
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
  Link,
} from '@chakra-ui/react';
import { FaSortAlphaDown, FaSortAlphaUp, FaFilter, FaGithub } from 'react-icons/fa';
import { itemData } from '../../data/items';
import { tagData } from '../../data/tags';

type Props = {
  setItems: (items: string[]) => void;
};

const whiteThemed = {
  bg: 'gray.200',
  color: 'gray.800',
  _hover: {
    bg: 'gray.300',
  },
  _focus: {
    bg: 'gray.300',
  },
  _active: {
    bg: 'gray.300',
  },
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
  }, [query, order, tags]);

  return (
    <Flex justifyContent="center" alignContent="center">
      <Flex w="100%" mt={5} justifyContent="space-between">
        <HStack spacing={1}>
          <Input
            {...whiteThemed}
            size="sm"
            w="sx"
            borderRadius={5}
            fontWeight="medium"
            placeholder="Search images..."
            _placeholder={{
              color: 'gray.800',
            }}
            onChange={(e: any) => setQuery(e.target.value.toLowerCase())}
          />
          <Box>
            <Menu closeOnSelect={false}>
              <MenuButton as={IconButton} aria-label="Filter options" icon={<FaFilter />} size="sm" fontSize="md" {...whiteThemed} />
              <MenuList>
                <MenuOptionGroup type="radio" title="Order" textAlign="left" defaultValue="asc">
                  <MenuItemOption value="asc" onClick={() => setOrder('asc')}>
                    <HStack justify="space-between">
                      <span>Ascending</span>
                      <FaSortAlphaDown />
                    </HStack>
                  </MenuItemOption>
                  <MenuItemOption value="desc" onClick={() => setOrder('desc')}>
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
                      <MenuItemOption lineHeight={1} key={key} value={name} onClick={handleTags}>
                        <Tag size="sm" bg={tag.color} color="gray.800">
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
        <Link href="https://github.com/antond15/items" isExternal>
          <IconButton aria-label="Source code" icon={<FaGithub />} size="sm" fontSize="xl" {...whiteThemed} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default SearchBar;
