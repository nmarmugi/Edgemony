import classNames from 'classnames'
import styles from './navbar.module.css'
import { useContext, useEffect } from 'react'
import { StateContext, SetStateContext } from '../Provider/Provider'
import Tooltip from '../Tooltip/Tooltip'

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
				<Tooltip />
			</div>
		</div>
	)
}