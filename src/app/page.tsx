"use client";

import Link from "next/link";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  const handleClickSocial = () => {
    alert("Work in progress!");
  };

  return (
    <div className={styles.screen}>
      <div className={styles.backdrop}>
        <h1 className={styles.title}>Mythos Mart: Treasures of Legends</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.buttons}>
          <Link href="./items-list" className={styles.loginButton}>
            Login
          </Link>
          <Link href="./items-list" className={styles.signUpButton}>
            Sign Up
          </Link>
        </div>
        <div className={styles.divider}>or Login with</div>

        <div className={styles.oauthButtons}>
          <button
            className={styles.oauthButtonGoogle}
            onClick={handleClickSocial}
          >
            Continue with Google
          </button>
          <button
            className={styles.oauthButtonApple}
            onClick={handleClickSocial}
          >
            Continue with Apple
          </button>
          <button
            className={styles.oauthButtonFacebook}
            onClick={handleClickSocial}
          >
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
