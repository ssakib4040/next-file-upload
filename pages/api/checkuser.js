import { withSessionRoute } from "/lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req, res) {
  // get user from database then:
  res.send({ ok: req.session.user || {} });
}
