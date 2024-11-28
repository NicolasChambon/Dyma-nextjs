import 'server-only'; // display an error message if the module is importer in a client component

export const getMovieByPath = (path: string, language: string = 'fr-FR') => {
  const url: URL = new URL(`${process.env.TMBD_API_URL}${path}`);
  url.searchParams.append('api_key', process.env.TMDB_API_KEY!);
  url.searchParams.append('language', language);

  return fetch(url).then((res) => res.json());
};
