import Head from 'next/head';
import { Montserrat } from '@next/font/google';
import styles from './Home.module.scss';
import Layout from '@/layouts/Main';
import useLocalStorageState from 'use-local-storage-state';
import clsx from 'clsx';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  const [darkMode] = useLocalStorageState('darkMode', { defaultValue: true });

  return (
    <>
      <Head>
        <title>Anton Malkov: Frontend Dev</title>
        <meta name="description" content="Anton Malkov frontend developer cv" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={montserrat.className}>
        <Layout>
          <div className={styles.container}>
            <h1 className={clsx(darkMode && styles.header)}>
              ANTON MALKOV
            </h1>
            <p>
              <b>Frontend Developer</b> | English B2 - С1
            </p>
            <h2>
              WORK EXPERIENCE
            </h2>

            <section className={styles.flex}>
              <span>
                <p>
                  <b>3.5+ years</b> - Web Development
                </p>
              </span>
              <span>
                <p>
                  <b>2+ years</b> - React JS
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
            <h2>EDUCATION</h2>

            <section className={styles.flex}>
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
          </div>
        </Layout>
      </main>
    </>
  );
}
