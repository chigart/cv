import styles from '../HomePage.module.scss';
import Contact from '@/components/Contact';
import React, { memo } from 'react';

const WrappedComponent = (): JSX.Element => {
  return (
    <>
      <h1>
        ANTON MALKOV
      </h1>
      <p>
        <b>Frontend Developer</b> | English B2 - С1
      </p>

      <h2>
        WORK EXPERIENCE
      </h2>

      <section className={styles.table}>
        <span>
          <p>
            <b>3.5+ years</b> - Web Development
          </p>
        </span>
        <span>
          <p>
            <b>2 years</b> - React JS
          </p>
        </span>
      </section>

      <p>
        <b>Current tech stack:</b> CSS (Sass, Bootstrap, Material UI), Javascript (Typescript, Axios),  <br/>
        React (Redux, Next JS, Jest + Storybook, React Hook Form + Yup, React Admin), Git (Gitlab), Figma.
      </p>
      <p>
        <b>April 2022 - october 2022</b> - Debertech (Tbilisi, Georgia) <br/>
        Main <b>frontend developer</b> in admin panel project for a payment system. <br/>
        Full frontend development in React. Moved legacy projects from Vue to React.
      </p>
      <p>
        <b>August 2021 - march 2022</b> - ITMO University (St. Petersburg, Russia) <br/>
        Main <b>frontend developer</b> in two big projects: website for all university admissions and corporate CMS.  <br/>
        Implemented from scratch frontend testing system, based on Jest and Storybook. Worked with 10+ legacy projects.  <br/>
        Participated in code review of every frontend developer and was responsible for frontend architecture. <br/>
      </p>
      <p>
        <b>April 2021 - july 2021</b> <br/>
        Freelance projects for personal clients, based on ReactJS and GatsbyJS. <br/>
      </p>
      <p>
        <b>From 2016 to 2018</b> worked part-time for a non-profit organization.  <br/>
        Wordpress based website, custom theme with javascript and CSS, development and support.
      </p>

      <h2>
        EDUCATION
      </h2>

      <section className={styles.table}>
        <span>
          <p>
            <b>2012-2016 </b><br/>
            ITMO University (St Petersburg)<br/>
            <b>Computer science</b> (bachelor)
          </p>
        </span>
        <span>
          <p>
            <b>2019-2021</b> <br/>
            Higher School of Economics (Moscow) <br/>
            Media communications (master)
          </p>
        </span>
      </section>

      <section className={styles.contact}>
        <h2>
          CONTACT
        </h2>

        <Contact />
      </section>
    </>
  );
};

export const Cv = memo(WrappedComponent);
export default Cv;
