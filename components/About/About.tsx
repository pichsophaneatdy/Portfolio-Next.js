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
                                Back in Grade 10, I decided to join a coding competition called “Technovation Girls” with some friends, but never could I ever imagine this coding competition has led me to find my passion for coding and the kind of career I want. 
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                            transition={{duration: 1.5, delay: 0.5}}
                            className={styles.about__detail}
                        >
                            <p className={styles.about__question}>My Education</p>
                            <p className={styles.about__answer}><span className={styles.m__bottom}>Right after high school in 2020, I decided to pursue a bachelor degree in information technology at Fairleigh Dickinson University, Vancouver.</span><span className="m-bottom">During the last three years in university, I have been introduced to many computer science concepts including object-oriented programming in Java, data structure, algorithms, C#, ASP.Net, JavaScript.</span> <span className="m-bottom">I can't wait to graduate in Decemeber 2023.</span></p>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0}}
                            whileInView={{opacity:1}}
                            transition={{duration: 1.5, delay: 0.5}}
                            className={styles.about__detail}
                        >
                            <p className={styles.about__question}>My Professional Experience</p>
                            <p className={styles.about__answer}>Since August 2022, I have been working as a Student IT Assistant at Fairleigh Dickinson University. I really enjoy providing technical support to students. staff, and faculty.</p>
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