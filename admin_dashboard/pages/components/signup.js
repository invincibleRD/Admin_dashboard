import styles from "./components.module.css";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.signUpbox}>
        <div className={styles.header}>Sign In</div>
        <div className={styles.title}>Sign in to your account</div>
        <div className={styles.withSign}>
          <div className={styles.google}>Sign in with Google</div>
          <div className={styles.google}>Sign in with Apple</div>
        </div>
        
        <div className={styles.register}>
          <div style={{ color: "black", fontSize: ".8rem" }}>
            Don't have an account?
          </div>
          <div className={`${styles.forgot}`}>Register here</div>
        </div>
      </div>
    </div>
  );
}
