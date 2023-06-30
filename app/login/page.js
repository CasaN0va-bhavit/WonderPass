"use client"
import React, {useRef} from 'react'
import Navbar from '@/components/Navbar';
import styles from './login.module.css'
// import GoogleLogin from 'react-google-login';
import home from "../home.module.css"
import emailjs from '@emailjs/browser';
import Header from "../plans/Header"


export default function Login() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mdh9nrd', 'template_aivsxdl', form.current, 'lxiBQPKbK_FiMS41l')
      .then((result) => {
          console.log(result.text);
          alert("Thanks for your purchase. You've received an email of your QR code.")
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <div>
    <Navbar className={styles.nav} />
    <Header state="2"/>
    <h1 className={home.homeHeading} style={{textAlign:"center",marginTop:"0vh"}}>
      
      <span className={home.gradient1}>LOG IN</span> </h1>
    {/* <div className={styles.center}>
    <div id="signindiv" className={styles.finclass}>
    </div>
    </div>
      <button className={styles.cardButton}><span className="btnText">Mail</span></button>
      <script src="https://smtpjs.com/v3/smtp.js"></script> */}
      <form ref={form} className={styles.loginBox} onSubmit={sendEmail} >
        <label className={styles.labels}>Email</label>
        <input type='email' className={styles.username} name="user_emai" />
        <button type='submit' className={styles.loginBtn}>Get email</button>
      </form>

    </div>
  )
}
