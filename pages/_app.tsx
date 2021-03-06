//components
import { PlayerLayout } from "components/PlayerLayout";

//providers
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";

//types
import type { AppProps } from "next/app";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

interface Props extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & { auth?: boolean };
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <ChakraProvider theme={theme}>
      {Component.auth ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
