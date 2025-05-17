/// <reference types="astro/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  export const FaHome: IconType;
  export const FaUser: IconType;
  export const FaCode: IconType;
  export const FaTools: IconType;
  export const FaHtml5: IconType;
  export const FaCss3Alt: IconType;
  export const FaJs: IconType;
  export const FaReact: IconType;
  export const FaVuejs: IconType;
  export const FaNodeJs: IconType;
  export const FaPython: IconType;
  export const FaGitAlt: IconType;
  export const FaDocker: IconType;
  export const FaAws: IconType;
  export const FaDatabase: IconType;
}

declare module 'react-icons/si' {
  import { IconType } from 'react-icons';
  export const SiTailwindcss: IconType;
  export const SiTypescript: IconType;
  export const SiAstro: IconType;
  export const SiFirebase: IconType;
  export const SiFigma: IconType;
  export const SiVisualstudiocode: IconType;
  export const SiPostgresql: IconType;
  export const SiMongodb: IconType;
}

declare module 'react-icons' {
  export interface IconType {
    (props: { className?: string }): JSX.Element;
  }
}