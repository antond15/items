import { Flex, Tag } from '@chakra-ui/react';
import { tagData } from '../../data/tags';

type Props = {
  tags: string[];
};

const Tags: React.FC<Props> = (props) => {
  return (
    <Flex mt={1.5} wrap="wrap">
      {props.tags?.map((name, key) => {
        const tag = tagData[name];
        return (
          tag && (
            <Tag key={key} size="sm" bg={tag.color} mt={0.5} _notLast={{ mr: 0.5 }}>
              {tag.label}
            </Tag>
          )
        );
      })}
    </Flex>
  );
};

export default Tags;
