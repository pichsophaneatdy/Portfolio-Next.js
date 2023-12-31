import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
// Components
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
// Data
import { getFeaturedProjects } from '@/data/projects'
// Font
import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'] });

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
// Interface to define the feature prop
interface FeaturedProjectsProps {
  projects: Project[];
}

export default function Home(props: FeaturedProjectsProps) {
  // Destructure projects from props
  const {projects} = props;
  return (
    <>
      <Head>
        <title>Pichsophaneat Dy</title>
        <meta name="description" content="I am a web developer based in Vancouver, BC." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={oswald.className}>
        <Hero />
        <FeaturedProjects projects={props.projects} />
      </main>
    </>
  )
}
export async function getStaticProps() {
  // Fetch featured projects for homepage
  const featuredProjects = await getFeaturedProjects();
  return {
    props: {
      projects: featuredProjects
    }
  }
}
