'use client';

// Dependencies
import { useState } from 'react';

// Components
import { MovieList, Movie } from '@/interfaces/movies';
import { DebounceInput } from 'react-debounce-input';
import MovieSearchResults from './MovieSearchResults/MovieSearchResults';

// Styles
import styles from './MovieSearch.module.scss';

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState<Array<Movie>>([]);
  const [hasFocus, setHasFocus] = useState(false);

  const updateMovieSearch = async (query: string) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results }: MovieList = await response.json();
    setMovieResults(results.filter((movie) => movie.backdrop_path));
  };

  return (
    <div className={styles.searchContainer}>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        placeholder="Rechercher un titre ..."
        onChange={(e) => updateMovieSearch(e.target.value)}
        onBlur={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      {movieResults.length > 0 && hasFocus && (
        <MovieSearchResults movieResults={movieResults} />
      )}
    </div>
  );
};

export default MovieSearch;
