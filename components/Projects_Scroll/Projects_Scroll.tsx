import {motion} from "framer-motion";
import styles from "./Projects_Scroll.module.scss";

interface Project {
    date: string,
    type: string, 
    name: string
    image: string,
    technology: string[]
    desc: string,
    link: string,
    isFeatured: boolean,
    // Only required for featured projects
    detail?: string,
    skills?: string[],
}

const Projects_Scroll = (props: {projects: Project[]}) => {
    const {projects} = props;
    return (
        <motion.div 
            initial={{y:700}}
            animate={{y: 0}}
            transition={{duration: 1.5, delay: 0.5}}
            className={styles.projects__scroll}>
            {
                projects.map((project, index) => {
                    return (
                        <a href={project.link} target="__blank" key={index} className={styles.project__card}>
                            <div className={styles.project__card__container}>
                                <img src={project.image} alt={project.name} className={styles.project__card__image} />
                            </div>
                            <div className={styles.project__card__content}>
                                <p className={styles.project__card__name}>{project.name}</p>
                                <a href={project.link} target="__blank">
                                    <img src="/assets/github.png" alt="" className={styles.project__card__icon}/>
                                </a>
                            </div>
                        </a>
                    )
                })
            }
        </motion.div>
    )
}

export default Projects_Scroll