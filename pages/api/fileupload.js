import { IncomingForm } from "formidable";

import { withSessionRoute } from "/lib/withSession";

const fileUpload = async (req, res) => {
  // req.body contains a content of an uploaded file + headers

  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  const { fields, files } = data;
  console.log(req.session);
};

export default withSessionRoute(fileUpload);

export const config = {
  api: {
    bodyParser: false,
  },
};
