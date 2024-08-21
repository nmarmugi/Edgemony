import Card from '../../components/Card/Card'
import styles from './skillsPage.module.css'

const skillsObj = [
	{
		type: 'HTML',
		percent: '93%'
	},
	{
		type: 'CSS',
		percent: '90%'
	},
	{
		type: 'JavaScript',
		percent: '95%'
	},
	{
		type: 'React',
		percent: '92%'
	},
	{
		type: 'Tailwind CSS',
		percent: '90%'
	},
	{
		type: 'Next.js',
		percent: '60%'
	},
	{
		type: 'C',
		percent: '70%'
	}
]

export default function SkillsPage() {
	return (
	<div className={styles.containerSkillsPage} id="skills">
		<h2>Skills</h2>
		<p>
			I have solid skills in <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>, which I use to build interactive and responsive web interfaces. I work with <span>React</span> to create modular and dynamic components, while <span>Tailwind CSS</span> allows me to quickly style projects. I have a basic understanding of <span>Next.js</span>, which I use for server-side rendering projects. Additionally, I have some experience with <span>C</span>, giving me a fundamental grasp of low-level programming.
		</p>
		<div className={styles.containerCards}>
			{skillsObj.map(element => <Card type={element.type} percent={element.percent} />)}
		</div>
	</div>
	)
}