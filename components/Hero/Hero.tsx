import styles from "./Hero.module.scss";
import Image from "next/image";
// Font - Staatliches
import { Staatliches } from "next/font/google";
const staatliches = Staatliches({ subsets: ['latin'], weight: "400" });
// Animation - Framer Motion
import {motion, useTime, useTransform} from "framer-motion";

const Hero = () => {

    // Animation
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

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
                <motion.a 
                    href="#"
                    whileHover={{
                        rotate: 90,
                        transition:{duration: 0.5}
                    }}
                >
                    <Image width={35} height={35} style={{objectFit: "cover"}} src="/assets/github.png" alt="Github Icon"/>
                </motion.a>
                <motion.a 
                    href="#"
                    whileHover={{
                        rotate: 90,
                        transition:{duration: 0.5}
                    }}
                >
                    <Image width={35} height={35} style={{objectFit: "cover"}} src="/assets/linkedin.png" alt="Github Icon"/>
                </motion.a>
                <motion.a 
                    href="#"
                    whileHover={{
                        rotate: 90,
                        transition:{duration: 0.5}
                    }}
                >
                    <Image width={35} height={35} style={{objectFit: "cover"}} src="/assets/email.png" alt="Github Icon"/>
                </motion.a>
            </div>
            {/* Next Icon */}
            <motion.div 
                style={{rotate}} 
                whileHover={{
                    scale: 1.2,
                    transition: {duration: 0.3}
                }}  
                className={styles.hero__next}
            >
                <Image className={styles.hero__next__icon} width={45} height={45} src="/assets/nextIcon.png" alt="Next Icon"/>
            </motion.div>
        </div>
    )
}

export default Hero;