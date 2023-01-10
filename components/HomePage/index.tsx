import React from 'react';
import styles from './HomePage.module.scss';
import Layout from '@/layouts/Main';
import Cv from '@/components/HomePage/Cv';
import useLocalStorageState from 'use-local-storage-state';
import { PaletteColors } from '@/types/global';
import { defaultLightColor } from '@/lib/constants';
import About from '@/components/HomePage/About';
import TechStack from '@/components/HomePage/TechStack';
import Contact from '@/components/Contact';

const HomePage = () => {
  const [color] = useLocalStorageState<PaletteColors>('color', { defaultValue: defaultLightColor });
  const [darkMode] = useLocalStorageState('darkMode', { defaultValue: true });

  return (
    <Layout>
      <div className={styles.container}>
        { !darkMode && <Cv /> }

        { darkMode && color === 'white' && <Cv /> }

        { darkMode && color === 'red' && <TechStack /> }

        { darkMode && color === 'green' && <About /> }

        { darkMode && color === 'blue' &&
          <div className={styles.flex}>
            <Contact />
          </div>
        }
      </div>
    </Layout>
  );
};

export default HomePage;
