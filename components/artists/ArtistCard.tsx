//components
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

//types
import { Artist } from "types/entities";

interface Props {
  artist: Artist;
}

const ArtistCard = ({ artist }: Props): JSX.Element => {
  return (
    <Box px="10px" w="20%">
      <Box bg="gray.900" p="15px" borderRadius="4px" width="100%">
        <Image src="http://placekitten.com/300/300" borderRadius="100%" />
        <Box marginTop="20px">
          <Text fontSize="xl">{artist.name}</Text>
          <Text fontSize="x-small">Artist</Text>
        </Box>
      </Box>
    </Box>
  );
};

export { ArtistCard };
