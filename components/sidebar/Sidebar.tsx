//comps
import NextImage from "next/image";
import { Box, Divider } from "@chakra-ui/layout";
import { NavMenu } from "./components/NavMenu";

//constants
import { NAV_ITEMS, MUSIC_MENU } from "./constants";

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
      <Box py="20px" height="100%">
        <Box width="120px" pb="20px" px="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box pb="20px">
          <NavMenu navItems={NAV_ITEMS} />
        </Box>
        <Box></Box>
        <Divider color="gray.800" />
        <Box height="66%" py="20px" overflowY="auto">
          <NavMenu navItems={MUSIC_MENU} />
        </Box>
      </Box>
    </Box>
  );
};

export { Sidebar };
