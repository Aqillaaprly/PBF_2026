import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";

const TampilanLogin = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    // login logic here
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold text-blue-600">
        Login Page</h1>

      <button onClick={() => handleLogin()}>Login</button> <br />
      <h1 style={{color: "red",borderRadius: "10px", padding: "10px",}}
        >
        Don't have an account
        </h1>
    
      <Link href="/auth/register">Go to Register Page</Link>
    </div>
  );
};

export default TampilanLogin;