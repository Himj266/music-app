import * as React from "react";

//comps
import NextLink from "next/link";
import { ListItem, ListIcon, LinkOverlay, LinkBox } from "@chakra-ui/layout";

interface Props {
  name: string;
  icon: React.ElementType;
  route: string;
}

export const MenuItem = ({ name, icon, route }: Props) => (
  <ListItem px="20px" fontSize="16px">
    <LinkBox>
      <NextLink href={route} passHref>
        <LinkOverlay>
          <ListIcon as={icon} color="white" pr="20px" />
          {name}
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  </ListItem>
);
