import styles from "./Hero.module.scss";
import {motion} from "framer-motion";
import Link from "next/link";
const Hero = () => {
    // Animation - button variants
    const buttonVariants = {
        initial: {
            opacity: 0
        }, 
        animate: {
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 1
            }
        },
        hover: {
            rotate: -3,
            duration: 0.5
        }
    }
    return (
        <div className={styles.hero}>
            {/* Description on the left */}
            <div className={styles.hero__left}>
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity:100}}
                    transition={{
                        duration: 2
                    }}
                    className={styles.hero__desc}
                >
                    <p className={styles.hero__title}>Hello,</p>
                    <p className={styles.hero__title}>This is <span className={styles.hero__name}>Neat.</span></p>
                    <p className={styles.hero__title}>I am a web developer.</p>
                </motion.div>
                <motion.p 
                    initial={{opacity: 0}}
                    animate={{opacity:100}}
                    transition={{
                        duration: 1,
                        delay: 0.5
                    }}
                    className={styles.hero__detail}
                >
                    I make positive impact by building websites. I love three things: coffee, hiking and coding.
                </motion.p>
                <Link href="/projects">
                    <motion.button
                        variants={buttonVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className={styles.hero__btn}>
                        Check out my projects
                    </motion.button>
                </Link>
            </div>
            {/* Images on the right */}
            <div className={styles.hero__right}>
                <motion.img 
                    src="/assets/sun.png" 
                    alt="sun"
                    className={styles.hero__sun}
                    initial={{
                        x: 300
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        delay: 1.5,
                        duration: 1
                    }}
                    whileInView={{
                        scale: [1,1.1,1,1.1,1],
                        y: [-30,0,-30],
                        transition: {
                            duration: 6,
                            repeat: Infinity
                        }
                    }}
                >
                </motion.img>
                <motion.img 
                    initial={{
                        scale: 0
                    }}  
                    animate={{
                        scale: 1
                    }}
                    transition={{
                        delay: 1.5,
                        duration: 2
                    }}
                    src="/assets/forests.png" 
                    alt="sun"
                    className={styles.hero__forest}
                >
                </motion.img>
            </div>
    </div>
    )
}

export default Hero;