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
            {/* Container 1: Name, Role, Description */}
            <div className={styles.hero__container1}>
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity:100}}
                    transition={{
                        duration: 2
                    }}
                    className={styles.hero__desc}
                >
                    <p className={styles.hero__subtitle}>Hello, This is Neat</p>
                    <p className={styles.hero__title}><span className={styles.hero__full__title}>Full-Stack </span>Web Developer</p>
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
                    I love building impactful products, and in fact, I built my first andriod app in grade 10.
                </motion.p>
                {/* <Link href="/projects">
                    <motion.button
                        variants={buttonVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className={styles.hero__btn}>
                        Check out my projects
                    </motion.button>
                </Link> */}
            </div>
            {/* Achievement + Techstack Container */}
            <div className={styles.hero__container2}>
                <div className={styles.hero__container4}>
                    {/* Projects completed */}
                    <div className={styles.hero__container3}>
                        <p className={styles.hero__statistic}>15</p>
                        <p className={styles.hero__statictic__detail}><span className={styles.hero__block}>PROJECTS</span> COMPLETED</p>
                    </div>
                    {/* Hackathons */}
                    <div className={styles.hero__container3}>
                            <p className={styles.hero__statistic}>3</p>
                            <p className={styles.hero__statictic__detail}><span className={styles.hero__block}>HACKATHON</span> PARTICIPATIONS</p>
                    </div>
                </div>
                {/* Techstacks */}
            </div>
    </div>
    )
}

export default Hero;