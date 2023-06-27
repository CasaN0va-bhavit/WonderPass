import styles from "./home.module.css"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar state="home" />

      <div className={styles.content}>
          <h1 className={styles.homeHeading}>
            <span className={styles.gradient1}>WONDERLAND</span> PASS
          </h1>
          <p className={styles.homePara}>
            Immerse yourself in a world where dreams come alive, adventures abound, and lifelong memories are waiting to be made. With ParkPass, get ready to unlock the full potential of your theme park visit and embark on a journey filled with excitement, wonder, and unparalleled fun.
          </p>
          <div className={styles.images}>
            <img className={styles.image3} src="https://media.discordapp.net/attachments/1122590461937328290/1123115225156173854/Card-1.png?width=429&height=473" />
            <img className={styles.image2} src="https://media.discordapp.net/attachments/1122590461937328290/1123115225445572668/Card-2.png?width=323&height=472" />
            <img className={styles.image1} src="https://media.discordapp.net/attachments/1122590461937328290/1123115224866758686/Card.png?width=429&height=473" />
          </div>
      </div>
    </div>
  )
}
