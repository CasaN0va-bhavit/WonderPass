import React from 'react'
import styles from "./styles/nav.module.css"

export default function Navbar() {
  return (
    <div className={styles.parent}>
      <div className={styles.logo}>
        Logo
      </div>

      <div className={styles.links}>
        <h1 className={styles.link} style={{color: "#FFA8DC"}}><a className="cursor-pointer no-underline">Home</a></h1>
        <h1 className={styles.link}><a className="cursor-pointer no-underline">About</a></h1>
        <h1 className={styles.link}><a className="cursor-pointer no-underline">Features</a></h1>
        <h1 className={styles.link}><a className="cursor-pointer no-underline">Plans</a></h1>
        <h1 className={styles.link}><a className="cursor-pointer no-underline">Reviews</a></h1>
      </div>
    </div>
  )
}
