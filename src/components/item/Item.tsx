import { Stack, Image } from '@chakra-ui/react';
import { ItemProps } from '../../typings/item';
import InfoPopover from './InfoPopover';
import { itemData } from '../../data/items';

type Props = {
  name: string;
};

const Item: React.FC<Props> = (props) => {
  const items: ItemProps = itemData[props.name];

  return (
    <Stack w="100px" h="125px" background="gray.700" borderRadius={5} overflow="hidden" spacing={0}>
      <Image src={`/images/${props.name}.png`} alt={items.label} w="100px" h="100px" objectFit="contain" />
      <InfoPopover name={props.name} {...items} />
    </Stack>
  );
};

export default Item;
