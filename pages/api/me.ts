import { validateRoute } from "lib/authMiddleware";
import prisma from "lib/prisma";

const me = validateRoute(async (req, res, user) => {
  const playlistCount = await prisma.playlist.count({
    where: {
      userId: user.id,
    },
  });

  res.json({ ...user, playlistCount });

  return res;
});

export default me;
