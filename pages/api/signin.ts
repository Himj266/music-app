import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

import prisma from "lib/prisma";

//types
import type { NextApiRequest, NextApiResponse } from "next";

const signIn = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user.id,
          time: Date.now(),
        },
        "hello", //todo use it in enviornment varisable
        { expiresIn: "8h" }
      );

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("HIMJ_ACCESS_TOKEN", token, {
          httpOnly: true,
          maxAge: 8 * 60 * 60,
          path: "/",
          sameSite: "lax",
          secure: process.env.NODE_ENV == "production",
        })
      );
      res.json(user);
    } else {
      res.status(401);
      res.json({ error: "Email or password incorrect" });
    }
  } catch (err) {
    res.status(401);
    res.json({ error: "Email or password incorrect" });
  }
};

export default signIn;
