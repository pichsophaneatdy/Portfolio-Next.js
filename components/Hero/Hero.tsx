import styles from "./Hero.module.scss";
import Image from "next/image";
// Font - Staatliches
import { Staatliches } from "next/font/google";
const staatliches = Staatliches({ subsets: ['latin'], weight: "400" });

const Hero = () => {
    return (
        <div className={`${styles.hero} ${staatliches.className}`}>
            {/* Container 1: Intro */}
            <div className={styles.hero__container1}>
                <p className={styles.hero__title}>HELLO, THIS IS NEAT.</p>
                <p className={styles.hero__title}><span className={styles.hero__hide}>I AM A </span>WEB DEVELOPER<span className={styles.hero__hide}>.</span></p>
            </div>
            {/* Container 2: Statisic */}
            <div className={styles.hero__container2}>
                <div className={styles.hero__container3}>
                    <p className={styles.hero__text1}>15</p>
                    <p className={styles.hero__text2}><span className={styles.hero__block}>PROJECTs</span>COMPLETED</p>
                </div>
                <div className={styles.hero__container3}>
                    <p className={styles.hero__text1}>3</p>
                    <p className={styles.hero__text2}><span className={styles.hero__block}>Hackathon</span> PARTICIPATIONS</p>
                </div>
            </div>
            {/* Contact Link */}
            <div className={styles.hero__container4}>
                <Image width={35} height={35} style={{objectFit: "cover"}} src="/assets/github.png" alt="Github Icon"/>
                <Image width={35} height={35} style={{objectFit: "cover"}} src="/assets/linkedin.png" alt="Linkedin Icon"/>
                <Image width={35} height={35} style={{objectFit: "cover"}} src="/assets/email.png" alt="Email Icon"/>
            </div>
            {/* Next Icon */}
            <div className={styles.hero__next}>
                <Image className={styles.hero__next__icon} width={45} height={45} src="/assets/nextIcon.png" alt="Next Icon"/>
            </div>
        </div>
    )
}

export default Hero;