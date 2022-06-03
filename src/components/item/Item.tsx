import React from 'react';
import { Stack, Image } from '@chakra-ui/react';
import { ItemProps } from '../../typings/item';
import InfoPopover from './InfoPopover';

const Item: React.FC<ItemProps & { name: string }> = (props) => {
  return (
    <Stack w="100px" h="125px" background="gray.700" borderColor="gray.600" borderRadius={5} overflow="hidden" spacing={0}>
      <Image src={`${process.env.PUBLIC_URL}/assets/images/${props.name}.png`} alt={props.label} w="100px" h="100px" objectFit="contain" />
      <InfoPopover {...props} />
    </Stack>
  );
};

export default Item;
