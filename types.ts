export type Inavlinks = {
  name: string;
  href: string;
};

export type Imoviecard = {
  title: string;
  overview: string;
  movieId: number | string;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
};

export type Imovieplayermodal = {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  year: number;
  age: number;
  time: number | string;
};

export type Ibtn = {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
};
