import ProjectCard from '../../components/ProjectCard/ProjectCard'
import styles from './projectsPage.module.css'

const arrayLinks = [
	{
		url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_di_gruppo_27-05-24_31-05-24/Quinto_giorno',
		img: '/img/27-05-24.png'
	},
	{
		url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_10-06-24',
		img: '/img/10-06-24.png'
	},
	{
		url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_01-07-24/01-07-24',
		img: '/img/01-07-24.png'
	},
	{
		url: 'https://github.com/nmarmugi/Edgemony/tree/main/code-week-headless-commerce',
		img: '/img/codeWeek.png'
	},
	{
		url: 'https://age-calculator-delta-two.vercel.app/',
		img: '/img/age.png'
	},
	{
		url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_04-07-24/04-07-24',
		img: '/img/04-07-24.png'
	},
	{
		url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_11-07-24/11-07-24',
		img: '/img/11-07-24.png'
	},
	{
		url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_12-07-24/12-07-24',
		img: '/img/12-07-24.png'
	},
	{
		url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_16-07-24/16-07-24',
		img: '/img/16-07-24.png'
	},
	{
		url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_25-07-24/25-07-24',
		img: '/img/25-07-24.png'
	},
	{
		url: 'https://bv-teams.vercel.app/',
		img: '/img/bvt.png'
	},
	{
		url: 'https://github.com/nmarmugi/42-progetti',
		img: '/img/c.png'
	},
	{
		url: 'https://quiz-parole.vercel.app/',
		img: '/img/quiz.png'
	},
	{
		url: 'https://github.com/nmarmugi/next',
		img: '/img/next.png'
	},
	{
		url: 'https://github.com/nmarmugi/Edgemony/tree/main/Prove/Responsive',
		img: '/img/responsive.png'
	}
]

export default function ProjectsPage() {

	function handleClick(e) {
		const url = e.currentTarget.id;
		window.open(url, "_blank");
	}

	return (
		<div id='projects' className={styles.containerProjectsPage}>
			<h2>PROJECTS</h2>
			<p>
				In this section, you will find a selection of projects that showcase my technical skills and creativity in web development. Each project represents a challenge I have faced and overcome, allowing me to deepen my technological knowledge. These works highlight my ability to create dynamic, responsive, and user-friendly websites and applications. Explore them to better understand my approach to problem-solving and my dedication!
			</p>
			<div className={styles.containerProjectCards}>
				{arrayLinks.map(link => <ProjectCard key={link.url} urlImg={link.img} onClick={handleClick} idNavigate={link.url} />)}
			</div>
		</div>
	)
}