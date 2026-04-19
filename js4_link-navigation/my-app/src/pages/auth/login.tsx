import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./login.module.css";

export default function LoginView() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/produk");
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Halaman Login</h1>

      <button className={styles.button} onClick={handleLogin}>
        Login
      </button>

      <Link href="/auth/register" className={styles.link}>
        Ke Halaman Register
      </Link>
    </div>
  );
}