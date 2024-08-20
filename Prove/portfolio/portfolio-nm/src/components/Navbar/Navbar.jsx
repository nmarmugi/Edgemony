import classNames from 'classnames'
import styles from './navbar.module.css'
import { useContext } from 'react'
import { StateContext, SetStateContext } from '../Provider/Provider'

export default function Navbar() {

	const state = useContext(StateContext)
	const setState = useContext(SetStateContext)

	function handleClick(key) {
		setState({
			home: key === 'home',
			projects: key === 'projects',
			skills: key === 'skills'
		})
	}

	return (
		<div className={classNames(styles.containerNavbar, styles.navbarDivNone)}>
			<a onClick={() => handleClick('home')} href="#home">
				<div className={styles.containerLogo}>
					<img src="/img/NM-removebg-preview.png" alt="Logo" />
				</div>
			</a>
			<div className={styles.links}>
				<div>
					<a onClick={() => handleClick('home')} href="#home">HOME</a>
					<div className={state.home ? styles.click : ''}></div>
				</div>
				<div>
					<a onClick={() => handleClick('skills')} href="#skills">SKILLS</a>
					<div className={state.skills ? styles.click : ''}></div>
				</div>
				<div>
					<a onClick={() => handleClick('projects')} href="#projects">PROJECTS</a>
					<div className={state.projects ? styles.click : ''}></div>
				</div>
				<div className={styles.containerSocial}>
					<a href="https://github.com/" target='_blank'><img src="/img/github_3291695.png" alt="Icona GitHub" /></a>
					<a href="https://www.linkedin.com/in/nicola-marmugi-2860b022a/" target='_blank'><img src="/img/linkedin_3488334.png" alt="Icona Linkedin" /></a>
				</div>
			</div>
		</div>
	)
}