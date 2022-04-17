import * as React from "react";

//comps
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

interface Props {
  color: string;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const GradientLayout = ({ color }: Props) => (
  <Box
    height="100%"
    overflowY="auto"
    bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
  >
    <Flex bgColor={`${color}.600`} p="40px" align="end">
      hello
    </Flex>
  </Box>
);
