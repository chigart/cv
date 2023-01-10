import styles from './Main.module.scss';
import Colorbox from '@/components/Colorbox';
import Light from '@/components/Light';
import { useEffect, FC } from 'react';
import { Coordinates, LayoutProps, PaletteColors } from '@/types/global';
import {
  changeLightStep,
  defaultLightColor,
  defaultCircleSize,
  defaultPositionX,
  defaultPositionY,
  maxCircleSize,
  minCircleSize
} from '@/lib/constants';
import useLocalStorageState from 'use-local-storage-state';
import Canvas from '@/components/Canvas';
import useWindowSize from '@/hooks/useWindowSize';
import clsx from 'clsx';
import { ImSwitch } from 'react-icons/im';
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';
import Contact from '@/components/Contact';
import Actions from '@/layouts/Main/Actions';
import useMobileVersion from '@/hooks/useMobileVersion';
import Hint from '@/components/Hint';

const Layout: FC <LayoutProps> = ({ children }): JSX.Element => {
  const [mousePos, setMousePos] = useLocalStorageState<Coordinates>('mousePos', { defaultValue: { x: defaultPositionX, y: defaultPositionY } });
  const [circleSize, setCircleSize] = useLocalStorageState('circleSize', { defaultValue: defaultCircleSize });
  const [color, setColor] = useLocalStorageState<PaletteColors>('color', { defaultValue: defaultLightColor });
  const [darkMode, setDarkMode] = useLocalStorageState('darkMode', { defaultValue: true });
  const [showContact, setShowContact] = useLocalStorageState('contact', { defaultValue: false });
  const colorboxParams = { color, setColor, darkMode };
  const isMobileVersion = useMobileVersion(setDarkMode);

  const toggleShowContact = () => setShowContact(current => !current);
  const toggleDarkMode = () => setDarkMode(current => !current);

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (!darkMode) document.body.classList.add('colored');
    else document.body.classList.remove('colored');
  }, [darkMode]);
    
  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number; }): void => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const handleWheel = (event: { deltaY: number }): void => {
      setCircleSize(current => {
        if (event.deltaY > 0 && current < maxCircleSize) return current + changeLightStep;
        else if (event.deltaY < 0 && current > minCircleSize) return current - changeLightStep;
        else return current;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleMouseMove);
    };
  }, []);

  const saveColoredCV = async (): Promise<void> => {
    const canvas = await html2canvas(document.body, { foreignObjectRendering: true });
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'AntonMalkovColoredCV.png', 'image/png');
  };

  const saveCV = (): boolean | XMLHttpRequest => downloadjs('/AntonMalkovCV.pdf');

  return (
    <>
      { !isMobileVersion && (
        darkMode ?
          <>
            <Light {...{ color, circleSize, mousePos }}/>
            <Hint {...{ color }}/>
          </> :
          <Canvas {...{ width, height, color, circleSize }}/>
      )
      }

      { !isMobileVersion &&
        <aside className={clsx(styles.toolbar, styles.toolbar__top)}>
          <Colorbox variant='red' {...colorboxParams}/>
          <Colorbox variant='green' {...colorboxParams}/>
          <Colorbox variant='blue' {...colorboxParams}/>
          <ImSwitch
            className={clsx(styles.toolbar__icon, darkMode ? styles.toolbar__icon_off : styles.toolbar__icon_on)}
            onClick={toggleDarkMode}
          />
        </aside>
      }

      { !darkMode && !isMobileVersion &&
        <>
          <aside className={clsx(styles.toolbar, styles.toolbar__middle, !showContact && styles.toolbar__middle_hidden)}>
            <Contact />
          </aside>

          <aside className={clsx(styles.toolbar, styles.toolbar__bottom)}>
            <Actions {...{ saveColoredCV, saveCV, toggleShowContact }}/>
          </aside>
        </>
      }

      { children }
    </>

  );
};

export default Layout;
