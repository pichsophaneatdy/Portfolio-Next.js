import {motion} from "framer-motion";
import FeatureProject from "../FeatureProject/FeatureProject";
import styles from "./FeaturedProjects.module.scss";

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
const FeaturedProjects = (props: {projects: Project[]}) => {
    return (
        <div className={styles.projects}>
            {/* Section Title */}
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{duration: 1.5, delay: 0.5}}
                className={styles.projects__title__container}
            >
                <h1 className={styles.projects__title}>FEATURED PROJECTS</h1>
                <div className={styles.projects__border}></div>
            </motion.div>
            {/* Render the project */}
            {
                props.projects?.map((project: Project) => {
                    return <FeatureProject project={project}/>
                })
            }
        </div>
    )
}

export default FeaturedProjects;