import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" placeholder="email" /> <br />
        <input type="text" placeholder="password" /> <br />
        <input type="submit" value="Login" />
      </form>
      <Link href="/login">
        <a> Login</a>
      </Link>
      <Link href="/register">
        <a> Register</a>
      </Link>
    </div>
  );
}
