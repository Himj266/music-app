//comps
import NextImage from "next/image";
import NextLink from "next/link";
import { Box, List, Divider, Center } from "@chakra-ui/layout";
import { MenuItem } from "./components/MenuItem";

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
          <List spacing={2}>
            {NAV_ITEMS.map(({ name, route, icon }) => (
              <MenuItem key={name} name={name} route={route} icon={icon} />
            ))}
          </List>
        </Box>
        <Box>
          <List spacing={2}>
            {MUSIC_MENU.map(({ name, route, icon }) => (
              <MenuItem key={name} name={name} route={route} icon={icon} />
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" py="20px" overflowY="auto">
          <List spacing={2}>
            {MUSIC_MENU.map(({ name, route, icon }) => (
              <MenuItem key={name} name={name} route={route} icon={icon} />
            ))}
          </List>
        </Box>
      </Box>
      Sidebar
    </Box>
  );
};

export { Sidebar };
