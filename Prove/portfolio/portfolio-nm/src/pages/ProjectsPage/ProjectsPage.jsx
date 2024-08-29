import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './projectsPage.module.css';
import { useState, useEffect } from 'react';

const arrayLinks = [
  { url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_di_gruppo_27-05-24_31-05-24/Quinto_giorno', img: '/img/27-05-24.png' },
  { url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_10-06-24', img: '/img/10-06-24.png' },
  { url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_01-07-24/01-07-24', img: '/img/01-07-24.png' },
  { url: 'https://github.com/nmarmugi/Edgemony/tree/main/code-week-headless-commerce', img: '/img/codeWeek.png' },
  { url: 'https://age-calculator-delta-two.vercel.app/', img: '/img/age.png' },
  { url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_04-07-24/04-07-24', img: '/img/04-07-24.png' },
  { url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_11-07-24/11-07-24', img: '/img/11-07-24.png' },
  { url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_12-07-24/12-07-24', img: '/img/12-07-24.png' },
  { url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_16-07-24/16-07-24', img: '/img/16-07-24.png' },
  { url: 'https://github.com/nmarmugi/Edgemony/tree/main/Esercitazione_25-07-24/25-07-24', img: '/img/25-07-24.png' },
  { url: 'https://bv-teams.vercel.app/', img: '/img/bvt.png' },
  { url: 'https://github.com/nmarmugi/42-progetti', img: '/img/c.png' },
  { url: 'https://quiz-parole.vercel.app/', img: '/img/quiz.png' },
  { url: 'https://github.com/nmarmugi/next', img: '/img/next.png' },
  { url: 'https://github.com/nmarmugi/Edgemony/tree/main/Prove/Responsive', img: '/img/responsive.png' },
  { url: 'https://pokedex-beryl-chi.vercel.app/', img: '/img/pokemon.png' }
];

export default function ProjectsPage() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % arrayLinks.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      (prevIndex - 1 + arrayLinks.length) % arrayLinks.length
    );
  };

  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(() => {
        nextProject();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoScrolling]);

  const handleDotClick = (index) => {
    setIsAutoScrolling(false);
    setCurrentProjectIndex(index);
  };

  const handleArrowClick = (direction) => {
    setIsAutoScrolling(false);
    if (direction === 'next') {
      nextProject();
    } else if (direction === 'prev') {
      prevProject();
    }
  };

  const handleClick = (e) => {
    const url = e.currentTarget.id;
    window.open(url, "_blank");
  };

  return (
    <div id='projects' className={styles.containerProjectsPage}>
      <h2>PROJECTS</h2>
      <p>
        In this section, you will find a selection of projects that showcase my technical skills and creativity in web development. Each project represents a challenge I have faced and overcome, allowing me to deepen my technological knowledge. These works highlight my ability to create dynamic, responsive, and user-friendly websites and applications. Explore them to better understand my approach to problem-solving and my dedication!
      </p>
      <div className={styles.containerProjectCards}>
        {isMobile && (
          <>
            <button onClick={() => handleArrowClick('prev')} className={styles.arrowLeft}>
              &lt;
            </button>
            <div className={styles.projectsGrid}>
              <ProjectCard
                key={arrayLinks[currentProjectIndex].url}
                urlImg={arrayLinks[currentProjectIndex].img}
                onClick={handleClick}
                idNavigate={arrayLinks[currentProjectIndex].url}
              />
            </div>
            <button onClick={() => handleArrowClick('next')} className={styles.arrowRight}>
              &gt;
            </button>
          </>
        )}
        {!isMobile && (
          <div className={styles.projectsGrid}>
            {arrayLinks.map((project) => (
              <ProjectCard
                key={project.url}
                urlImg={project.img}
                onClick={handleClick}
                idNavigate={project.url}
              />
            ))}
          </div>
        )}
      </div>
      {isMobile && (
        <div className={styles.dotsContainer}>
          {arrayLinks.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentProjectIndex ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
