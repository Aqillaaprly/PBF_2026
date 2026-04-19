import Link from 'next/link';

export default function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <Link href="/auth/login">Go to Login</Link>
    </div>
  );
}