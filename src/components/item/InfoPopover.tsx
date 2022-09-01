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

      <PopoverContent textAlign="left">
        <PopoverArrow />

        <PopoverHeader fontWeight="medium" border="none">
          <>
            {props.label}
            <Tags tags={props.tags} />
          </>
        </PopoverHeader>

        {props.description && (
          <PopoverBody pt={0}>
            <Box>{props.description}</Box>
          </PopoverBody>
        )}

        <PopoverFooter>
          <ButtonGroup size="sm">
            <Tooltip hasArrow label="Save image" color="gray.800">
              <Link href={imageUrl} download>
                <IconButton colorScheme="green" aria-label="Save image" icon={<FaSave />} fontSize="md" bg="green.400" />
              </Link>
            </Tooltip>

            <Tooltip hasArrow label="Open source" color="gray.800">
              <Link href={imageUrl} isExternal>
                <IconButton colorScheme="gray" aria-label="Open source" icon={<FaExternalLinkAlt />} fontSize="md" variant="ghost" />
              </Link>
            </Tooltip>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default InfoPopover;
