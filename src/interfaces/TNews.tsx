export type TNews = {
  [x: string]: any;
  id: number;
  title: string;
  content: string;
  images: string;
  author: string;
};
export type NewsFormParams = {
  title: string;
  author: string;
  content: string;
  images: string;
};
