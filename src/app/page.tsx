import React from "react";
import styles from "./page.module.css";

export default function Home() {
  const name = "Nnamdi";
  console.log(name);
  return (
    <main className={styles.main}>
      <h1>Next.js template for commit hooks.</h1>
    </main>
  );
}
