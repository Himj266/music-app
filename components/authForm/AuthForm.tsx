import { useState, useCallback, FormEventHandler } from "react";

//utils
import { auth } from "lib/auth";

//comps
import { Flex, Box, Input, Button } from "@chakra-ui/react";

//hooks
import { useRouter } from "next/router";

interface Props {
  mode: "signin" | "signup";
}

export const AuthForm = ({ mode }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const user = await auth(mode, { email, password });
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex justify="center" align="center" height="100px">
        Authentication
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box p="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password}
            />
            <Button type="submit" bg="green.500" isLoading={isLoading}>
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
