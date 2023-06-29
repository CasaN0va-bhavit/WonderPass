"use client"
import styles from "../home.module.css"
import Navbar from "@/components/Navbar"
import mainstyle from "./plans.module.css"
import doosraStyles from "../about/about.module.css"
import Header from "./Header"
export default function Home() {

  // export plan;

  return (
    <div>
      <Navbar state="plans"/>

      <Header state="1" />
      <h1 className={styles.homeHeading} style={{fontSize: "3.5vw", display: "flex", alignItems: "center", marginTop: "3vh"}}>
      <span className={styles.gradient1}>PLANS</span>
    </h1>
      <div className={mainstyle.plans}>
        <div className={mainstyle.card} id={mainstyle.single}>
          <h1 className={mainstyle.cardHeading}>Single</h1>
          <ul className={mainstyle.ul}>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara}>Scanning</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "2.5vw", listStyle: "disc"}}>Seat Selection</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "5vw", listStyle: "disc"}}>Video Access</p></li>
          </ul>
          <p className={mainstyle.paraMoney}>$85</p>
          <a className={mainstyle.cardButton} href="./purchase/single"  ><span className={mainstyle.btnText}>Choose</span></a>
       </div>
        <div className={mainstyle.card} id={mainstyle.family}>
          <h1 className={mainstyle.cardHeading}>Family</h1>
          <p className={mainstyle.para1}>Most Popular</p>
          <ul className={mainstyle.ul}>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara}>Scanning</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "2.5vw", listStyle: "disc"}}>Seat Selection</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "5vw", listStyle: "disc"}}>Video Access</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "7.5vw", listStyle: "disc"}}>Dynamic Itinerary System</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "10vw", listStyle: "disc"}}>Rent Golf Cart for Free</p></li>
          </ul>
          <p className={mainstyle.paraMoney} style={{top: "9.5vw"}}>$150</p>
          <a className={mainstyle.cardButton} href="./purchase/family"  ><span className={mainstyle.btnText}>Choose</span></a>
        </div>
        <div className={mainstyle.card} id={mainstyle.duo}>
          <h1 className={mainstyle.cardHeading}>Duo</h1>
          <ul className={mainstyle.ul}>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara}>Scanning</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "2.5vw", listStyle: "disc"}}>Seat Selection</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "5vw", listStyle: "disc"}}>Video Access</p></li>
            <li className={mainstyle.li}><p className={mainstyle.benefitsPara} style={{marginTop: "7.5vw", listStyle: "disc"}}>Dynamic Itinerary System</p></li>
          </ul>
          <p className={mainstyle.paraMoney}>$100</p>
          <a className={mainstyle.cardButton} href="./purchase/duo" ><span className={mainstyle.btnText}>Choose</span></a>
        </div>
      </div>
    </div>
  )
}
