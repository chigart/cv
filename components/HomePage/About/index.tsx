import { useEffect, useState } from 'react';
import styles from './About.module.scss';
import shuffleArray from '@/lib/shuffleArray';

const rawText = [
  'I have 3.5 years of real experience in programming, including 1.5 years of full-time company jobs and 2 years of ' +
  'freelancing and part-time. I started with Pascal at 10 years old, created a simple arcade game that won a student competition. ' +
  'At 19 I received a bachelor degree in Computer Science. All these years writing code was a more of a hobby for me. 2 years ago, after ' +
  'trying out a couple of different careers: photographer, filmmaker, event organizer, I finally started programming full-time as a ' +
  'frontend developer.',
  'At my first company after just 3 month of work i achieved a role of a Main Frontend Developer in two big projects. ' +
  'And i have been in this role since. I was responsible for all frontend development, code-review of every piece of frontend code. ' +
  'In all of my projects I had a couple junior frontend developers to lead',
  'I am a digital nomad, location independent. I can consider relocation to Spain or Portugal, but currently working remotely from one of ' +
  'these countries: Turkey, Thailand, Georgia. My citizenship is Russian, registered as an individual entrepreneur in Georgia. I am fluent ' +
  'in English, native in Russian, speak some spanish.'
];

const About = (): JSX.Element => {
  const [text, setText] = useState<Record<number, string[]>>({
    0: shuffleArray(rawText[0].split('')),
    1: shuffleArray(rawText[1].split('')),
    2: shuffleArray(rawText[2].split('')),
  });
  const [sectionRearranging, setSectionRearranging] = useState(-1);

  useEffect(() => {
    if (sectionRearranging > -1) rearrangeText();
  }, [sectionRearranging, text]);

  const rearrangeText = () => {
    const introductionArray = rawText[sectionRearranging].split('');
    introductionArray.every((symbol, index) => {
      if (symbol !== text[sectionRearranging][index]) {
        setTimeout(() => {
          const position = text[sectionRearranging].indexOf(symbol, index);
          const tempArray: string[] = text[sectionRearranging];
          const deletedSymbol = tempArray.splice(position, 1);
          tempArray.splice(index, 0, deletedSymbol[0]);
          setText(current => {
            return { ...current, isRearranging: tempArray };
          });
        }, 5);
        return false;
      }
      return true;
    });
  };

  return (
    <>
      <h2>
        About me
      </h2>

      <div
        className={styles.wrapper}
        onMouseLeave={() => setSectionRearranging(-1)}
      >
        <p onMouseEnter={() => setSectionRearranging(0)}>
          { text[0].join('') }
        </p>
        <p onMouseEnter={() => setSectionRearranging(1)}>
          { text[1].join('') }
        </p>
        <p onMouseEnter={() => setSectionRearranging(2)}>
          { text[2].join('') }
        </p>
      </div>
    </>
  );
};

export default About;
