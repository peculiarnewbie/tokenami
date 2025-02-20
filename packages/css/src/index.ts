import type { TokenamiCSS } from './css';
export { createConfig, defaultConfig } from '@tokenami/config';
export { createCss, css } from './css';

export type TokenamiStyle<P> = {
  [K in keyof P]: K extends 'style' ? TokenamiCSS & P[K] : P[K];
};

export type Variants<T extends () => {}> = Parameters<T>[0] extends undefined | null
  ? {}
  : NonNullable<Parameters<T>[0]>;
