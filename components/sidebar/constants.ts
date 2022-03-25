//icons
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const HOME_NAV = { name: "Home", icon: MdHome, route: "/" };
const SEARCH_NAV = { name: "Search", icon: MdSearch, route: "/search" };
const LIBRARY_NAV = {
  name: "Your Library",
  icon: MdLibraryMusic,
  route: "/library",
};

export const MUSIC_MENU = [
  { name: "Create Playlist", icon: MdPlaylistAdd, route: "/" },
  { name: "Favorites", icon: MdPlaylistAdd, route: "/favorites" },
];
export const NAV_ITEMS = [HOME_NAV, SEARCH_NAV, LIBRARY_NAV];
