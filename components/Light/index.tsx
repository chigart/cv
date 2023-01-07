import { FC, memo } from 'react';
import { LightProps } from '@/types/global';
import useCssColor from '@/hooks/useCssColor';

const WrappedComponent: FC <LightProps> = ({ mousePos, circleSize, color }): JSX.Element => {
  const cssColor = useCssColor(color);
  const blackColor = useCssColor('black');

  return (
    <div style={{
      position: 'relative',
      left: `${mousePos.x - circleSize / 2}px`,
      top: `${mousePos.y - circleSize / 2}px`,
      width: `${circleSize}px`,
      height: `${circleSize}px`,
      background: `radial-gradient(circle ${circleSize / 2}px, ${cssColor}, ${blackColor})`,
    }}/>
  );
};

export const Light = memo(WrappedComponent);
export default Light;
