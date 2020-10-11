const API_KEY = "7ea459c58b1dfe4eeef39c7993db7d8d";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&width_genres=99`,
};

export default request;
