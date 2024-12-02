import 'server-only'; // display an error message if the module is importer in a client component

import { MovieList } from '@/interfaces/movies';

export const getMovieByPath = async (
  path: string,
  params: Array<{ key: string; value: string }> = [],
  language: string = 'fr-FR'
): Promise<MovieList> => {
  const url: URL = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append('api_key', process.env.TMDB_API_KEY!);
  url.searchParams.append('language', language);

  params.forEach((params) => {
    url.searchParams.append(params.key, params.value);
  });

  const response = await fetch(url);
  return response.json();
};
