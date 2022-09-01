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
  Tooltip,
  Link,
  IconButton,
} from '@chakra-ui/react';
import Tags from './Tags';
import { FaExternalLinkAlt, FaSave } from 'react-icons/fa';
import { ItemProps } from '../../typings/item';

type Props = ItemProps & { name: string };

const InfoPopover: React.FC<Props> = (props) => {
  const imageUrl = `/assets/images/${props.name}.png`;

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
            <Tags tags={props.tags} />
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
              <Link href={imageUrl} isExternal>
                <IconButton colorScheme="gray" aria-label="Open source" icon={<FaExternalLinkAlt />} fontSize="md" />
              </Link>
            </Tooltip>

            <Tooltip hasArrow label="Save image" bg="gray.300" color="black">
              <Link href={imageUrl} download>
                <IconButton colorScheme="green" aria-label="Save image" icon={<FaSave />} fontSize="md" />
              </Link>
            </Tooltip>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default InfoPopover;
