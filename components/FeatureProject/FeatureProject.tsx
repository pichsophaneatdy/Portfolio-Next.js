import {motion} from "framer-motion";
import styles from "./FeatureProject.module.scss";
import mock_img from "../../public/assets/mock-project.jpg";

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
        <motion.div className={styles.project}>
            <div className={styles.project__img__container}>
                <img className={styles.project__img} src="/assets/mock-project.jpg" alt="Project Image"/>
            </div>
            
        </motion.div>
    )
}
export default FeatureProject;