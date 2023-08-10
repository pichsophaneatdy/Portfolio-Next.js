import {motion} from "framer-motion"
import Link from "next/link"
import styles from "./Experience.module.scss"
// experience data
import { getAllExperience } from "@/data/experience"

// Interface to define experience
interface Experience {
    date: string,
    title: string,
    company: string,
    skills: string[],
    role: string
}
const Experience = (props: {experience: Experience[]}) => {
    const {experience} = props;
    return (
        <div className={styles.experience}>
            <div className={styles.experience__header}>
                <Link href="/" className={styles.link}>
                    <motion.div 
                        initial={{x:-200}}
                        animate={{x: 0}}
                        transition={{duration: 1.5}}
                        className={styles.return__container}>
                        <img src="/assets/arrow.png" alt="Back arrow" className={styles.return__icon} />
                        <p className={styles.return__text}>
                            Pichsophaneat Dy
                        </p>
                    </motion.div>
                </Link>
                <motion.p 
                    initial={{x: -200}}
                    animate={{x:0}}
                    transition={{duration: 1.5}}
                    className={styles.experience__title}
                >
                    EXPERIENCE
                </motion.p>
            </div>
            <div className={styles.experience__content}>
                {
                    experience?.map((experience, index) => {
                        return (
                            <motion.div 
                                initial={{y:700}}
                                animate={{y:0}}
                                transition={{duration: 2, delay: index+1}}
                                key={index} 
                                className={styles.experience__item}
                            >
                                <p className={styles.experience__date}>{experience.date}</p>
                                <div className={styles.experience__detail}>
                                    <p className={styles.experience__title1}>{experience.title}</p>
                                    <p className={styles.experience__company}>{experience.company}</p>
                                    <p className={styles.experience__desc}>{experience.role}</p>
                                    <div className={styles.experience__skills}>
                                        {
                                            experience.skills.map((skill, index) => {
                                                return <p key={index} className={styles.experience__skill}>{skill}</p>
                                            })
                                        }
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export async function getStaticProps() {
    const experience = await getAllExperience();
    return {
        props: {experience}
    }
}
export default Experience;