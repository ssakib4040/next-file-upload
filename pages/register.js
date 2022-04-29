import Head from "next/head";
import Link from "next/link";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
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
