export type ProjectType = {
  imgsrc: string;
  name: string;
  description: string;
  gitLink: string;
  stack: string[];
  video?: Video;
  demoLink?: string;
};

export type Video = {
  name: string;
  code: string;
};
