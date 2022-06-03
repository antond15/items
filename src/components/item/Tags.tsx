import React from 'react';
import { Flex, Tag } from '@chakra-ui/react';
import { tags } from '../../data/tags';

const Tags: React.FC<{ tags: string[] }> = (props) => {
  return (
    <Flex mt={1.5} wrap="wrap">
      {props.tags.map((name, key) => {
        const tag = tags[name];
        return (
          tag && (
            <Tag key={key} size="sm" bg={tag.color} mr={0.5} mt={0.5}>
              {tag.label}
            </Tag>
          )
        );
      })}
    </Flex>
  );
};

export default Tags;
