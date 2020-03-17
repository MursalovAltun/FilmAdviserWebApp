import { Genre } from './genre';
import { Language } from './language';
import { ProductionCompany } from './production-company';
import { Country } from './country';

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
  video: number;
  voteAverage: number;
  spokenLanguages: Array<Language>;
  genres: Array<Genre>;
  productionCompanies: Array<ProductionCompany>;
  productionCountries: Array<Country>;

  constructor(init?: Partial<Movie>) {
    Object.assign(this, init);

    if (init.genres) {
      this.genres = init.genres.map(x => new Genre(x));
    }

    if (init.spokenLanguages) {
      this.spokenLanguages = init.spokenLanguages.map(x => new Language(x));
    }

    if (init.productionCompanies) {
      this.productionCompanies = init.productionCompanies.map(x => new ProductionCompany(x));
    }

    if (init.productionCountries) {
      this.productionCountries = init.productionCountries.map(x => new Country(x));
    }
  }

  public get genresNames(): Array<string> {
    return this.genres.map(x => x.name);
  }

  public get languages(): Array<string> {
    return this.spokenLanguages.map(x => x.name);
  }

  public get companies(): Array<string> {
    return this.productionCompanies.map(x => x.name);
  }

  public get countries(): Array<string> {
    return this.productionCountries.map(x => x.name);
  }

  public get movieTitle(): string {
    return this.title ? this.title : this.originalTitle;
  }
}
