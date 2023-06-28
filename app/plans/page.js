import styles from "../home.module.css"
import Navbar from "@/components/Navbar"
import mainstyle from "./plans.module.css"
import doosraStyles from "../about/about.module.css"
export default function Home() {
  return (
    <div>
      <Navbar state="plans"/>

      <div className={doosraStyles.content}>
          <h1 className={styles.homeHeading} style={{fontSize: "5vw"}}>
            <span className={styles.gradient1}>PLANS</span>
          </h1>
      </div>
      <div className={mainstyle.plans}>
        <div className={mainstyle.card} id={mainstyle.single}>
          <h1 className={mainstyle.cardHeading}>Single</h1>
          <a className={mainstyle.cardButton}><h1 className={mainstyle.btnText}>Buy Now</h1></a>
        </div>
        <div className={mainstyle.card} id={mainstyle.duo}>
          <h1 className={mainstyle.cardHeading}>Duo</h1>
          <a className={mainstyle.cardButton}><h1 className={mainstyle.btnText}>Buy Now</h1></a>
        </div>
        <div className={mainstyle.card} id={mainstyle.family}>
          <h1 className={mainstyle.cardHeading}>Family</h1>
          <a className={mainstyle.cardButton}><h1 className={mainstyle.btnText}>Buy Now</h1></a>
        </div>
      </div>
    </div>
  )
}
