//components
import { Box, Flex, Text } from "@chakra-ui/layout";
import { ArtistCard } from "./ArtistCard";

//types
import { Artist } from "types/entities";

interface Props {
  artists: Artist[];
}

const Artists = ({ artists }: Props): JSX.Element => {
  return (
    <Box px="40px" color="white">
      <Box mb="40px">
        <Text fontSize="2xl" fontWeight="bold">
          Top Artists This Month
        </Text>
        <Text fontSize="md">Only Visible To You</Text>
      </Box>
      <Flex>
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </Flex>
    </Box>
  );
};

export { Artists };
