import { validateRoute } from "lib/authMiddleware";

const me = validateRoute((req, res, user) => res.json(user));

export default me;
