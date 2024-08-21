import styles from './hamburger.module.css'
import classNames from 'classnames'
import { useState, useContext, useEffect } from 'react'
import { StateContext, SetStateContext } from '../Provider/Provider'
import TooltipHamburger from '../Tooltip/TooltipHamburger'

export default function Hamburger() {

	const [click, setClick] = useState(false)
	const state = useContext(StateContext)
	const setState = useContext(SetStateContext)

	function handleClickLine(key) {
		setClick(false)
		setState({
			home: key === 'home',
			projects: key === 'projects',
			skills: key === 'skills'
		})
	}

	useEffect(() => {
		const handleScroll = () => {
		  const homeSection = document.getElementById('home');
		  const skillsSection = document.getElementById('skills');
		  const projectsSection = document.getElementById('projects');
	  
		  const scrollPosition = window.scrollY + window.innerHeight / 2;
	  

		  if (scrollPosition >= projectsSection.offsetTop) {
			setState({ home: false, projects: true, skills: false });
		  } else if (scrollPosition >= skillsSection.offsetTop) {
			setState({ home: false, projects: false, skills: true });
		  } else if (scrollPosition >= homeSection.offsetTop) {
			setState({ home: true, projects: false, skills: false });
		  }
		};
	  

		window.addEventListener('scroll', handleScroll);
	  

		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, [setState]);

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
				<TooltipHamburger />
			</div>
		</div>
	)
}