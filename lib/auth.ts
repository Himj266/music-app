import { fetcher } from "./fetcher";

export const auth = (
  method: "signin" | "signup",
  body: { email: string; password: string }
) => fetcher(`/${method}`, body);
