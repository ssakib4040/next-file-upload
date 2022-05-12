import { withSessionRoute } from "/lib/withSession";

export default withSessionRoute(user);

async function user(req, res, session) {
  console.log(req.session);
  res.send({ user: req.session.user || null });
}
