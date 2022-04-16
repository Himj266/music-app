import * as React from "react";

//comps
import NextLink from "next/link";
import {
  List,
  ListItem,
  ListIcon,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/layout";

//types
import { NavItem } from "../types";

interface Props {
  navItems: NavItem[];
}

export const NavMenu = ({ navItems }: Props) => (
  <List spacing={2}>
    {navItems.map(({ name, route, icon }) => (
      <ListItem key={name} px="20px" fontSize="16px">
        <LinkBox>
          <NextLink href={route} passHref>
            <LinkOverlay>
              <ListIcon as={icon} color="white" pr="20px" />
              {name}
            </LinkOverlay>
          </NextLink>
        </LinkBox>
      </ListItem>
    ))}
  </List>
);
