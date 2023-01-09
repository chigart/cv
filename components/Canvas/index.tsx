import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styles from './Canvas.module.scss';
import { CanvasProps, Coordinates } from '@/types/global';
import renderCursor from '@/lib/renderCursor';
import useCssColor from '@/hooks/useCssColor';

const Canvas: FC <CanvasProps> = ({ width, height, color, circleSize }): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinates | undefined>(undefined);
  const [cursor, setCursor] = useState('none');
  const strokeWidth =  Math.floor(circleSize / (color === 'white' ? 10 : 20));
  const cssColor = useCssColor(color);

  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setMousePosition(coordinates);
      setIsPainting(true);
    }
  }, []);

  useEffect(() => {
    setCursor(renderCursor(strokeWidth, cssColor));
  }, [strokeWidth, cssColor]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousedown', startPaint);

    return () => canvas.removeEventListener('mousedown', startPaint);
  }, [startPaint]);

  const paint = useCallback((event: MouseEvent) => {
    if (isPainting) {
      const newMousePosition = getCoordinates(event);
      if (mousePosition && newMousePosition) {
        drawLine(mousePosition, newMousePosition);
        setMousePosition(newMousePosition);
      }
    }
  }, [isPainting, mousePosition]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousemove', paint);

    return () => canvas.removeEventListener('mousemove', paint);
  }, [paint]);

  const exitPaint = useCallback(() => {
    setIsPainting(false);
    setMousePosition(undefined);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);

    return () => {
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
    };
  }, [exitPaint]);

  const getCoordinates = (event: MouseEvent): Coordinates | undefined => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
  };

  const drawLine = (originalMousePosition: Coordinates, newMousePosition: Coordinates) => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) context.globalCompositeOperation = color === 'white' ? 'destination-out' : 'source-over';

    if (context) {
      context.strokeStyle = cssColor;
      context.lineJoin = 'round';
      context.lineWidth = strokeWidth;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();
      context.stroke();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      className={styles.canvas}
      style={{ cursor }}
    />
  );
};

export default Canvas;
