import Link from "next/link";
import styles from "./register.module.css";

const RegisterView = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Register Page</h1>

      <button className={styles.button}>Register</button>

      <Link href="/auth/login" className={styles.link}>
        Back to Login
      </Link>
    </div>
  );
};

export default RegisterView;