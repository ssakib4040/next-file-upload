import { withSessionRoute } from "/lib/withSession";

export default withSessionRoute(logoutRoute);

async function logoutRoute(req, res, session) {
  console.log(req.session);
  res.send({ ok: req.session.user || {} });
}
