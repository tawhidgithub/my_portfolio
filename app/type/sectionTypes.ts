export type Skill = {
  id?: string;
  name: string;
  level?: string;
};

export type Project = {
  id?: string;
  title: string;
  description?: string;
  link?: string;
};

export type Experience = {
  id?: string;
  company?: string;
  role?: string;
  from?: string;
  to?: string;
};

export type Testimonial = {
  id?: string;
  author?: string;
  message?: string;
};

export type YoutubeItem = {
  id?: string;
  title?: string;
  url?: string;
};

export type Review = {
  id?: string;
  author?: string;
  text?: string;
  rating?: number;
};

export type ImageItem = {
  id?: string;
  url: string;
  alt?: string;
};
