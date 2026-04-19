import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/produk');
  };

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={() => handleLogin()}>
        Login
      </button>

      <br />

      <Link href="/auth/register">Back to Register</Link>
    </div>
  );
}