import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import styles from './skillsPage.module.css';

const skillsObj = [
  { type: 'HTML', percent: '93%' },
  { type: 'CSS', percent: '90%' },
  { type: 'JavaScript', percent: '95%' },
  { type: 'TypeScript', percent: '85%' },
  { type: 'React', percent: '92%' },
  { type: 'Tailwind CSS', percent: '90%' },
  { type: 'Next.js', percent: '60%' },
  { type: 'C', percent: '70%' }
];

export default function SkillsPage() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const nextSkill = () => {
    setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skillsObj.length);
  };

  const prevSkill = () => {
    setCurrentSkillIndex((prevIndex) => 
      (prevIndex - 1 + skillsObj.length) % skillsObj.length
    );
  };

  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(nextSkill, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoScrolling]);

  const handleDotClick = (index) => {
    setIsAutoScrolling(false);
    setCurrentSkillIndex(index);
  };

  const handleArrowClick = (direction) => {
    setIsAutoScrolling(false);
    if (direction === 'next') {
      nextSkill();
    } else if (direction === 'prev') {
      prevSkill();
    }
  };

  return (
    <div id='skills' className={styles.containerSkillsPage}>
      <h2>Skills</h2>
      <p>
        I have solid skills in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>TypeScript</span>, which I use to build interactive and responsive web interfaces. I work with <span>React</span> to create modular and dynamic components, while <span>Tailwind CSS</span> allows me to quickly style projects. I have a basic understanding of <span>Next.js</span>, which I use for server-side rendering projects. Additionally, I have some experience with <span>C</span>, giving me a fundamental grasp of low-level programming.
      </p>
      <div className={styles.containerCards}>
        {isMobile && (
          <>
            <button onClick={() => handleArrowClick('prev')} className={styles.arrowLeft}>
              &lt;
            </button>
            <div className={styles.skillsGridMobile}>
              <Card
                type={skillsObj[currentSkillIndex].type}
                percent={skillsObj[currentSkillIndex].percent}
              />
            </div>
            <button onClick={() => handleArrowClick('next')} className={styles.arrowRight}>
              &gt;
            </button>
          </>
        )}
        {!isMobile && (
          <div className={styles.skillsGridDesktop}>
            {skillsObj.map((skill) => (
              <Card
                key={skill.type}
                type={skill.type}
                percent={skill.percent}
              />
            ))}
          </div>
        )}
      </div>
      {isMobile && (
        <div className={styles.dotsContainer}>
          {skillsObj.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentSkillIndex ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
