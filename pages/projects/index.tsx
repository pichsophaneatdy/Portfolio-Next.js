import styles from "./Project.module.scss";
import {motion} from "framer-motion";
import Link from "next/link";
// Project data
import { getAllProjects } from "@/data/projects";
// Componenet
import Projects_Scroll from "@/components/Projects_Scroll/Projects_Scroll";

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

const Projects = (props: {projects: Project[]}) => {
    const {projects} = props;
    return (
        <div className={styles.projectPage__container}>
        <div className={styles.projectPage}>
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
                initial={{x:-200}}
                animate={{x: 0}}
                transition={{duration: 1.5}}
                className={styles.projectPage__title}
            >
                All Projects
            </motion.p>

            {/* Display all projects in scrolling mode */}
            <Projects_Scroll projects={projects} />

            {/* Display all projects in table */}
            <motion.table 
                initial={{y:500}}
                animate={{y: 0}}
                transition={{duration: 1.5, delay: 0.5}}
                className={styles.projectPage__table}
            >
                <thead>
                    <tr className={styles.projectPage__border}>
                        <th className={styles.projectPage__date}>Date</th>
                        <th className={styles.projectPage__name}>Project</th>
                        <th className={`${styles.projectPage__hide2} ${styles.projectPage__type}`}>Type</th>
                        <th className={`${styles.projectPage__hide4} ${styles.projectPage__tech}`}>Built with</th>
                        <th className={`${styles.projectPage__hide} ${styles.projectPage__anchor}`}>Link</th>
                    </tr>
                </thead>
                <tbody>
                {
                    projects?.map((project) => {
                        return (
                            <tr key={project.name}>
                                <td className={styles.projectPage__date}>{project.date}</td>
                                <td className={styles.projectPage__name}>
                                    {project.name}
                                    <a  className={`${styles.projectPage__link} ${styles.projectPage__hide3}`} href={project.link}>
                                        <img className={styles.projectPage__icon2} src="/assets/link.png" alt="Link"/>
                                    </a>
                                </td>
                                <td className={`${styles.projectPage__hide2} ${styles.projectPage__row} ${styles.projectPage__type}`}>{project.type}</td>
                                <td className={`${styles.projectPage__hide4} ${styles.projectPage__techstack}`}>
                                    {
                                        project?.technology?.map((item, index) => {
                                            return <span key={index} className={styles.projectPage__single__tech}>{item}</span>
                                        })
                                    }
                                </td>
                                <td className={`${styles.projectPage__hide} ${styles.projectPage__anchor}`}>
                                    <a className={styles.projectPage__link} href={project.link}>
                                        GitHub
                                        <img className={styles.projectPage__icon} src="/assets/link.png" alt="Link"/>
                                    </a>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </motion.table>
        </div>
        </div>
    )
}

export async function getStaticProps() {
    const projects = await getAllProjects();
    console.log(projects.length)
    return {
        props: {projects: projects}
    }
}

export default Projects;