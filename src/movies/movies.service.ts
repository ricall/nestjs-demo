import { Injectable } from '@nestjs/common';
import { Movie } from '@/types/interface/movie';
import { movies } from '@/mock/movies';

@Injectable()
export class MoviesService {
  private moviesList: Movie[];

  constructor() {
    this.moviesList = movies;
  }

  getMovieList(): Movie[] {
    return this.moviesList;
  }

  getMovieById(id: string): Movie {
    const movie = this.moviesList.find((movie) => movie.id === id);
    if (!movie) {
      throw new Error('Could not find the movie');
    }
    return movie;
  }
}
