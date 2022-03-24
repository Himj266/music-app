//comps
import NextImage from "next/image";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

interface Props {}

const Sidebar = ({}: Props): JSX.Element => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      px="5px"
      color="gray"
    >
      <Box py="20px">
        <Box width="120px" pb="20px" px="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
      </Box>
      Sidebar
    </Box>
  );
};

export { Sidebar };
