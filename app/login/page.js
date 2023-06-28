"use client"
import React, {useState} from 'react'
import Navbar from '@/components/Navbar';
import styles from './login.module.css'

export default function Login() {
  return (
    <div>
    <Navbar className={styles.nav} />
    <form className={styles.screen}>
    <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
    </div>
      <div className={styles.loginBox}>
          <h1 className={styles.loginHead}>Login</h1>
          <label className={styles.labels}>Username</label>
          <input className={styles.username} type='text' placeholder='Username' />
          <label className={styles.labels}>Password</label>
          <input className={styles.password} type='password' placeholder='Password' />
          <a className={styles.loginBtn}><button>Login</button></a>
          <label className={styles.labels}>Don't have an account, <a href="/signup" style={{cursor: "pointer"}}>Sign Up</a></label>
      </div>
    </form>
    </div>
  )
}
