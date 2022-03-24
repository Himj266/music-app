import * as React from "react";

//comps
import { Box } from "@chakra-ui/layout";
import { Sidebar } from "components/sidebar";

interface Props {
  children: React.ReactNode;
}

const PlayerLayout = ({ children }: Props) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box ml="250" mb="200">
        {children}
      </Box>
      <Box position="absolute" bottom="0" left="0">
        footer
      </Box>
    </Box>
  );
};

export { PlayerLayout };
