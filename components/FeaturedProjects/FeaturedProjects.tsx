import {motion} from "framer-motion";
import FeatureProject from "../FeatureProject/FeatureProject";
import styles from "./FeaturedProjects.module.scss";
import Link from "next/link";


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
                props.projects?.map((project: Project, index: number) => {
                    return <FeatureProject key={index} project={project}/>
                })
            }
            {/* Link to full projects archive */}
            <Link href="/projects"  className={styles.project__archive__link}>
                <p>
                    View Full Project Archive
                </p>
                <img src="/assets/link.png" alt="link icon" className={styles.project__archive}/>
            </Link>
        </div>
    )
}

export default FeaturedProjects;