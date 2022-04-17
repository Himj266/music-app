import jwt from "jsonwebtoken";
import prisma from "./prisma";

//types
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "types/entities";
import { TokenizedObject } from "types/jwt";

export const validateRoute =
  (handler: (req: NextApiRequest, res: NextApiResponse, user: User) => void) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.HIMJ_ACCESS_TOKEN;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, "hello") as TokenizedObject;

        user = (await prisma.user.findUnique({
          where: { id },
        })) as unknown as User;

        if (!user) {
          throw new Error("not a valid user");
        }
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error) ?? "Not a valid user";

        res.status(401);
        res.json({ error: message });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not authorized" });
  };
