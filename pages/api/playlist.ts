import { validateRoute } from "lib/authMiddleware";
import prisma from "lib/prisma";

//types
import type { NextApiRequest, NextApiResponse } from "next";

const playlist = validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    try {
      const playlists = await prisma.playlist.findMany({
        where: {
          userId: user.id,
        },
        orderBy: {
          name: "asc",
        },
      });

      res.json(playlists);
    } catch (err) {
      res.status(401);
      res.json({ error: "playlists not found" });
    }
  }
);

export default playlist;
