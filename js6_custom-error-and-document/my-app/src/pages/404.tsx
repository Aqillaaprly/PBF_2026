import Link from "next/link";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img
        src="/page-not-found.png"
        alt="404"
        className={styles.error__image}
      />

      {/* TITLE */}
      <h1 className={styles.error__title}>
        404 - Page Not Found
      </h1>

      {/* DESCRIPTION */}
      <p className={styles.error__desc}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/*BUTTON */}
      <Link href="/" className={styles.error__button}>
        Back to Home
      </Link>

    </div>
  );
};

export default Custom404;