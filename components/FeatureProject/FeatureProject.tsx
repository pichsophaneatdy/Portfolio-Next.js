import {motion} from "framer-motion";
import styles from "./FeatureProject.module.scss";

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

const FeatureProject = (props: {project: Project}) => {
    const {name, image, skills, detail, link} = props.project;
    return (
        // Animation
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{duration: 1.5, delay: 0.5}}
            className={styles.project}
        >
            {/* Project name */}
            <p className={styles.project__title}>{name}</p>
            <div className={styles.project__content}>
                {/* Image */}
                <img src={image} alt={name} className={styles.project__img} />
                {/* Skills */}
                <div className={styles.project__info}>
                    <div className={styles.project__techstacks}>
                        {
                            skills?.map((skill: string, index: number) => {
                                return <p key={index} className={styles.project__item}>{skill}</p>
                            })
                        }
                    </div>
                    {/* Detail */}
                    <p className={styles.project__detail}>{detail}</p>
                    {/* Link to github repo */}
                    <a href={link} className={styles.project__btn__container}>
                        <button className={styles.project__btn}>View project</button>
                        <div className={styles.project__btn__bg}></div>
                    </a>
                    
                </div>
            </div>
        </motion.div>
    )
}
export default FeatureProject;