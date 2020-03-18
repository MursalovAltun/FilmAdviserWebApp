import { Video } from './video';

export class Movie {
  posterPath: string;
  adult: boolean;
  overview: string;
  releaseDate: string;
  id: number;
  originalTitle: string;
  originalLanguage: string;
  title: string;
  budget: number;
  revenue: number;
  tagline: string;
  backdropPath: string;
  popularity: number;
  voteCount: number;
  video: boolean;
  voteAverage: number;
  languages: Array<string>;
  genres: Array<string>;
  productionCompanies: Array<string>;
  productionCountries: Array<string>;
  trailers: Array<Video>;

  constructor(init?: Partial<Movie>) {
    Object.assign(this, init);

    if (init.trailers) {
      this.trailers = init.trailers.map(x => new Video(x));
    }
  }

  public get movieTitle(): string {
    return this.title ? this.title : this.originalTitle;
  }
}
