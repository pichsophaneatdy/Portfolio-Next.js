import {motion} from "framer-motion";
import styles from "./About.module.scss";
import {programming_languages} from "../../data/skills";
import { front_end } from "../../data/skills";
import { back_end } from "../../data/skills";

const About = () => {
    return (
        <div className={styles.about}>
            {/* About Title */}
            <motion.div 
                className={styles.about__title__container}
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{duration: 1.5, delay: 0.5}}
            >
                <h1 className={styles.about__title}>ABOUT ME</h1>
                <div className={styles.about__border}></div>
            </motion.div>
            {/* Content */}
            <div className={styles.about__content}>
                <div className={styles.about__info}>
                    <div className={styles.about__details}>
                        <motion.div 
                            initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                            transition={{duration: 1.5, delay: 0.5}}
                            className={styles.about__detail}
                        >
                            <p className={styles.about__question}>How I started coding</p>
                            <p className={styles.about__answer}>
                                In grade 10, I built my first android app called “EDMENT” using Scratch. The most exciting part was that EDMENT was released in Google Play Store for a couple months. That is how my coding journey began.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                            transition={{duration: 1.5, delay: 0.5}}
                            className={styles.about__detail}
                        >
                            <p className={styles.about__question}>My Education</p>
                            <p className={styles.about__answer}><span className={styles.m__bottom}>Currently, I am doing my bachelor degree in information technology, where I learn about object-oriented programming in Java, Python, C#, data structure and algorithm. I am excited to finish it in December 2023.</span></p>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                            transition={{duration: 1.5, delay: 0.5}}
                            className={styles.about__detail}
                        >
                            <p className={styles.about__question}>My Professional Experience</p>
                            <p className={styles.about__answer}>Since August 2022, I have been working as a Student IT Assistant. I specialize in software troubleshooting, networking and server infrastructure.</p>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                            transition={{duration: 1.5, delay: 0.5}}
                            className={styles.about__detail}
                        >
                            <p className={styles.about__question}>My Tech Stacks</p>
                            <p className={styles.about__stack__title}>Programming Languages</p>
                            <div className={styles.about__skills}>
                                {
                                    programming_languages?.map((item: string, index: number) => {
                                        return <p key={index} className={styles.about__skill}>{item}</p>
                                    })
                                }
                            </div>
                            <p className={styles.about__stack__title}>Front-end Technologies</p>
                            <div className={styles.about__skills}>
                                {
                                    front_end?.map((item: string, index: number) => {
                                        return <p key={index} className={styles.about__skill}>{item}</p>
                                    })
                                }
                            </div>
                            <p className={styles.about__stack__title}>Back-end Technologies</p>
                            <div className={styles.about__skills}>
                                {
                                    back_end?.map((item: string, index: number) => {
                                        return <p key={index} className={styles.about__skill}>{item}</p>
                                    })
                                }
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default About;