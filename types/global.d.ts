import { ReactNode } from 'react';

export type Coordinates = {
  x: number;
  y: number;
};

export type PaletteColors = 'red' | 'green' | 'blue' | 'white' | 'black' | 'pink' | 'yellow';

export type ColorboxProps = {
  variant: PaletteColors;
  color: PaletteColors;
  setColor: (color: PaletteColors) => void;
  darkMode: boolean;
}

export type LightProps = {
  mousePos: Coordinates;
  circleSize: number;
  color: PaletteColors;
}
export type LayoutProps = {
  children: ReactNode;
}

interface CanvasProps {
  width: number;
  height: number;
  color: PaletteColors;
  circleSize: number;
}

export type WindowSize = {
  width: number;
  height: number;
}

export type ExternalLinkProps = {
  href: string;
  text: string;
}

export type ContactProps = {
  showContact: boolean;
}

export type ActionsProps = {
  saveColoredCV: () => Promise<void>;
  saveCV: () => boolean | XMLHttpRequest;
  toggleShowContact: () => void;
};
