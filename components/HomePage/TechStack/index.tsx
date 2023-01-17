import styles from './TechStack.module.scss';
import React from 'react';

const TechStack = (): JSX.Element => {
  const techList = ['Pascal', 'React', 'C', 'C++', 'Python', 'SQL', 'Javascript', 'Typescript', 'HTML', 'CSS', 'SASS', 'Material UI',
    'Bootstrap', 'Axios', 'Redux', 'NextJS', 'Jest', 'Storybook', 'Figma', 'Next', 'Git', 'Gitlab', 'Gitlab', 'Yarn', 'Npm', 'REST API',
    'BEM', 'Webpack', 'ESLint', 'Vue', 'GatsbyJS', 'PHP', 'Symphony'];

  const renderCircles = () => {
    const circles = [];

    for (let i = 0; i < 100; i++) {
      const randomTitle = techList[Math.floor(Math.random() * (techList.length - 1))];
      circles.push(<span className={styles.circle} key={i}> { randomTitle } </span>);
    }

    return circles;
  };

  return (
    <>
      <h2>
        Technologies I have worked with
      </h2>

      <div className={styles.wrapper}>
        { renderCircles() }
      </div>
    </>
  );
};

export default TechStack;
