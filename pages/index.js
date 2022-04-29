import Head from "next/head";
import Link from "next/link";

import axios from "axios";

export default function Home() {
  const handleUpload = async (e) => {
    e.preventDefault();

    console.log(e.target.logo.files);

    const formData = new FormData();
    formData.append("username", "ssakib4040");
    formData.append("profilePic", e.target.logo.files[0]);

    const { data } = axios.post(`/api/fileupload`, formData);

    console.log(data);
  };
  return (
    <div>
      <form
        method="post"
        action="/api/new"
        encType="multipart/form-data"
        onSubmit={handleUpload}
      >
        <input name="logo" type="file" />
        <input type="submit" />
      </form>
    </div>
  );
}

import { withSessionSsr } from "/lib/withSession";

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user || {};

    if (user.admin !== true) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return {
      props: {
        user: req.session.user,
      },
    };
  }
);
