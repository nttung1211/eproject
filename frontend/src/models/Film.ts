import Genre from './Genre';

interface Film {
  id?: number;
  title: string;
  description: string;
  slug: string;
  maturity: number;
  genres: Genre[];
  createdAt?: Date;
  updatedAt?: Date;
}

export default Film;