import {motion} from "framer-motion";
import FeatureProject from "../FeatureProject/FeatureProject";
import styles from "./FeaturedProjects.module.scss";
import Link from "next/link";

interface Project {
    id: number,
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
        <section className={styles.projects}>
            <h2 className={styles.projects__title}>FEATURED PROJECTS</h2>
            {/* Render Project */}
            {
                props.projects.map((project) => {
                    return <FeatureProject key={project.id} project={project} />
                })
            }
        </section>
    )
}

export default FeaturedProjects;