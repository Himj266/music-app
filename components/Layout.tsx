import * as React from "react";

//comps
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

interface Props {
  color: string;
  imageUrl: string;
  subtitle: string;
  title: string;
  description: string;
  roundedImage?: boolean;
  children: React.ReactNode;
}

export const GradientLayout = ({
  color,
  imageUrl,
  roundedImage,
  subtitle,
  title,
  description,
}: Props) => (
  <Box
    height="100%"
    overflowY="auto"
    bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
  >
    <Flex bgColor={`${color}.600`} p="40px" align="end">
      <Box p="20px">
        <Image
          boxSize="160px"
          boxShadow="2xl"
          src={imageUrl}
          borderRadius={roundedImage ? "100%" : "3px"}
          alt=""
        />
      </Box>
      <Box padding="20px" lineHeight="40px" color="white">
        <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
          {subtitle}
        </Text>
        <Text fontSize="6xl">{title}</Text>
        <Text fontSize="x-small">{description}</Text>
      </Box>
    </Flex>
  </Box>
);
