import styles from "./Header.module.scss";
import Link from "next/link";
import {motion} from "framer-motion";
import { useRouter } from "next/router";
import {useState, useEffect} from "react";
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({ subsets: ['latin'] });

const Header = () => {
    // State to check for active nav
    const [active, setActive] = useState(1);
    // State to check if the mobile menu is opened
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Call useRouter hook to get pathname
    const router = useRouter();
    const {pathname} = router;
    // Animation variants for mobile menu
    const variants = {
        open: { opacity: 1, x: 0 ,
            transition: {
            stiffness: 20,
            duration: 0.5
        } },
        closed: { opacity: 0, x: "100%", type: "spring", transition: {
            stiffness: 20,
            duration: 0.5
        } },
    }
    // useEffect to keep track of the active page
    useEffect(() => {
        if(pathname === "/") setActive(1);
        if(pathname === "/projects") setActive(2);
        if(pathname === "/experience") setActive(3);
        if(pathname === "/resume") setActive(4);
    }, [pathname])

    return (
        <header className={monserrat.className}>
            {/* Mobile Menu */}
            {isMenuOpen && <motion.nav
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                variants={variants}
                className={styles.header__dropdown__menu}
            >
                <div className={styles.header__content}>
                    <nav className={styles.header__nav}>
                        <Link href="/" onClick={()=>{
                                setIsMenuOpen(false);
                            }} className={active === 1 ? styles.header__item__active : styles.header__item}>
                            <p className={styles.header__item__text}>01</p>
                            <p className={styles.header__item__text}>About Me</p>
                        </Link>
                        <Link href="/projects" onClick={()=>{
                                setIsMenuOpen(false);
                            }} className={active === 2 ? styles.header__item__active : styles.header__item}>
                            <p className={styles.header__item__text}>02</p>
                            <p className={styles.header__item__text}>Projects</p>
                        </Link>
                        <Link href="/experience" onClick={()=>{
                                setIsMenuOpen(false);
                            }} className={active === 3 ? styles.header__item__active : styles.header__item}>
                            <p className={styles.header__item__text}>03</p>
                            <p className={styles.header__item__text}>Experience</p>
                        </Link>
                        <a target="__blank" href="https://drive.google.com/file/d/1B1AkgCpCYkR_SpMh4-8Ul5U05POcPDfB/view?usp=sharing" onClick={()=>{
                                setIsMenuOpen(false);
                            }} className={active === 4 ? styles.header__item__active : styles.header__item}>
                            <p className={styles.header__item__text}>04</p>
                            <p className={styles.header__item__text}>Resume</p>
                        </a>
                    </nav>
                </div>
        </motion.nav>}
        {/* Tablet and Desktop Menu */}
        <div className={styles.header2}>
            <div className={styles.header__left}>
                <motion.a
                    whileHover={{scale: 1.15}}
                    transition={{duration: 0.5}}
                    target="_blank" href="mailto:pichsophaneat@gmail.com">
                    <img src="/assets/email.png" alt="" className={styles.header__icon} />
                </motion.a> 
                <motion.a 
                    whileHover={{scale: 1.15}}
                    transition={{duration: 0.5}}
                    target="_blank" href="https://github.com/pichsophaneatdy">
                    <img src="/assets/github.png" alt="" className={styles.header__icon} />
                </motion.a> 
                <motion.a 
                    whileHover={{scale: 1.15}}
                    transition={{duration: 0.5}}
                    target="_blank" href="https://www.linkedin.com/in/pichsophaneat/">
                    <img src="/assets/linkedin.png" alt="" className={styles.header__icon} />
                </motion.a> 
            </div>
            <div className={styles.header__right__big__screen}>
                <Link className={styles.header__anchor} href="/">
                    <p className={active === 1 ? styles.header__link__active : styles.header__link}>01<span>About Me</span></p>
                </Link>
                <Link className={styles.header__anchor} href="/projects">
                    <p className={active === 2 ? styles.header__link__active : styles.header__link}>02<span>Projects</span></p>
                </Link>
                <Link className={styles.header__anchor} href="/experience">
                    <p className={active === 3 ? styles.header__link__active : styles.header__link}>03<span>Experience</span></p>
                </Link>
                <a target="__blank" href="https://drive.google.com/file/d/1B1AkgCpCYkR_SpMh4-8Ul5U05POcPDfB/view?usp=sharing" className="header__anchor">
                    <p className={active === 4 ? styles.header__link__active : styles.header__link}>04<span>Resume</span></p>
                </a>
            </div>
            <div className={styles.header__right}>
                <button 
                    
                    onClick={()=> setIsMenuOpen(!isMenuOpen)} 
                    className={styles.header__menu__btn}
                >
                    <motion.img whileHover={{scale:1.2, transition:{duration:0.5}}} src={isMenuOpen ? "/assets/cross.png" : "/assets/menu.png"} alt="" className={styles.header__menu__icon} />
                </button>
            </div>
        </div>
        </header>
    )
}

export default Header;