import { MovieCard } from './MovieCard';
import { MovieProps } from '../type/MovieProps';

import '../styles/content.scss';

interface IProps {
  movies: MovieProps[];
}

export function Content({ movies }: IProps) {
  return (
    <main>
      <div className='movies-list'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}
