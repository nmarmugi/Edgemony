import styles from './hamburger.module.css'
import classNames from 'classnames'
import { useState, useContext } from 'react'
import { StateContext, SetStateContext } from '../Provider/Provider'

export default function Hamburger() {

	const [click, setClick] = useState(false)
	const state = useContext(StateContext)
	const setState = useContext(SetStateContext)

	function handleClickLine(key) {
		setState({
			home: key === 'home',
			projects: key === 'projects',
			skills: key === 'skills'
		})
	}

	function handleClick() {
		setClick(true)
	}

	function handleClickClose() {
		setClick(false)
	}

	return (
		<div className={classNames(styles.containerHamburger, styles.hamburgerDivNone)}>
			<a onClick={() => handleClickLine('home')} href="#home">
				<div className={styles.containerLogo}>
					<img src="/img/NM-removebg-preview.png" alt="Logo" />
				</div>
			</a>
			<div onClick={handleClick} className={click ? styles.hamburgerNone : styles.hamburger}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className={click ? styles.dropDown : styles.dropDownNone}>
				<div onClick={handleClickClose} className={styles.divClose}>&times;</div>
				<div>
					<a onClick={() => handleClickLine('home')} href="#home">HOME</a>
					<div className={state.home ? styles.click : ''}></div>
				</div>
				<div>
					<a onClick={() => handleClickLine('skills')} href="#skills">SKILLS</a>
					<div className={state.skills ? styles.click : ''}></div>
				</div>
				<div>
					<a onClick={() => handleClickLine('projects')} href="#projects">PROJECTS</a>
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