

export const  buscarRating = (rating) => {
  let aux = 0;
  if (rating < 5 && rating >= 1) 
    aux = 1;
  else if (rating >= 5 && rating <= 8)
    aux = 2;
  else if (rating > 8)
    aux = 3;
  return aux
}


export const generos = [
  { genero : "Cualquiera" },
  { genero: "Accion" },
  { genero: "Aventura" },
  { genero: "Ciencia Ficcion" },
  { genero: "Comedia" },
  { genero: "Crimen" },
  { genero: "Drama" },
  { genero: "Fantasia" },
  { genero: "Romance" },
  { genero: "Terror" },
];



export const library = [
  {
    id: 1,
    titulo: "Matrix",
    director: "Lilly Wachowski",
    anio: 1999,
    genero: "Ciencia Ficcion",
    rating: 3,
    tipo: "Película",
    visto: false,
    url: "/002_p.webp"
  },
  {
    id: 2,
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    anio: 1972,
    genero: "Drama",
    rating: 9.7,
    tipo: "Película",
    visto: true,
    url: "/el-padrino-44747-1.webp"
  },
  {
    id: 3,
    titulo: "Inception",
    director: "Christopher Nolan",
    anio: 2010,
    genero: "Ciencia Ficcion",
    rating: 9.0,
    tipo: "Película",
    visto: false,
    url: "/inception.webp"
  },
  {
    id: 4,
    titulo: "Parasite",
    director: "Bong Joon-ho",
    anio: 2019,
    genero: "Crimen",
    rating: 8.6,
    tipo: "Película",
    visto: true,
    url: "/SZ2BOTTQXBGWPEZVFCHOQARY6Y.webp"
  },
  {
    id: 5,
    titulo: "Stranger Things",
    director: "Hermanos Duffer",
    anio: 2016,
    genero: "Ciencia Ficcion",
    rating: 8.5,
    tipo: "Serie",
    visto: true,
    url: "/91UaMqkEb5L.webp"
  },
  {
    id: 6,
    titulo: "Breaking Bad",
    director: "Vince Gilligan",
    anio: 2008,
    genero: "Drama",
    rating: 9.5,
    tipo: "Serie",
    visto: true,
    url: "/3191575.webp"
  },
  {
    id: 7,
    titulo: "The Last of Us",
    director: "Craig Mazin",
    anio: 2023,
    genero: "Drama",
    rating: 8.8,
    tipo: "Serie",
    visto: false,
    url: "/3581920_100.webp"
  },
  {
    id: 8,
    titulo: "El Padrino 2",
    director: "Francis Ford Coppola",
    anio: 1974,
    genero: "Drama",
    rating: 9.0,
    tipo: "Película",
    visto: false,
    url: "/the-godfather-part-ii-movie-poster.webp"
  },
  {
    id: 9,
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    anio: 2008,
    genero: "Accion",
    rating: 9.0,
    tipo: "Película",
    visto: true,
    url: "/41tqIUNiNjL.webp"
  },
  {
    id: 10,
    titulo: "Chernobyl",
    director: "Craig Mazin",
    anio: 2019,
    genero: "Drama",
    rating: 9.4,
    tipo: "Serie",
    visto: false,
    url: "/chernobyl.webp"
  },
  {
    id: 11,
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    anio: 1994,
    genero: "Crimen",
    rating: 8.9,
    tipo: "Película",
    visto: true,
    url: "/pulp-fiction-cover-i1288.webp"
  },
  {
    id: 12,
    titulo: "Forrest Gump",
    director: "Robert Zemeckis",
    anio: 1994,
    genero: "Romance",
    rating: 8.8,
    tipo: "Película",
    visto: true,
    url: "/be83e279b33387c2cc2a6a9418352f76.webp"
  },
  {
    id: 13,
    titulo: "Fight Club",
    director: "David Fincher",
    anio: 1999,
    genero: "Drama",
    rating: 8.8,
    tipo: "Película",
    visto: false,
    url: "/FigthClub.webp"
  },
  {
    id: 14,
    titulo: "Titanic",
    director: "James Cameron",
    anio: 1997,
    genero: "Romance",
    rating: 7.9,
    tipo: "Película",
    visto: true,
    url: "/609-titanic.webp"
  },
  {
    id: 15,
    titulo: "Gladiator",
    director: "Ridley Scott",
    anio: 2000,
    genero: "Accion",
    rating: 8.5,
    tipo: "Película",
    visto: false,
    url: "/gladiator.webp"
  },
  {
    id: 16,
    titulo: "El Señor de los Anillos: El Retorno del Rey",
    director: "Peter Jackson",
    anio: 2003,
    genero: "Fantasia",
    rating: 9.0,
    tipo: "Película",
    visto: true,
    url: "/001_p.webp"
  },
  {
    id: 17,
    titulo: "Star Wars: Episodio IV - Una Nueva Esperanza",
    director: "George Lucas",
    anio: 1977,
    genero: "Ciencia Ficcion",
    rating: 8.6,
    tipo: "Película",
    visto: false,
    url: "/41aDbhRmLDL.webp"
  },
  {
    id: 18,
    titulo: "El Resplandor",
    director: "Stanley Kubrick",
    anio: 1980,
    genero: "Terror",
    rating: 8.4,
    tipo: "Película",
    visto: true,
    url: "/resplandor.webp"
  },
  {
    id: 19,
    titulo: "La Lista de Schindler",
    director: "Steven Spielberg",
    anio: 1993,
    genero: "Drama",
    rating: 9.0,
    tipo: "Película",
    visto: false,
    url: "/4911-la-lista-de-schindler.webp"
  },
  {
    id: 20,
    titulo: "Interstellar",
    director: "Christopher Nolan",
    anio: 2014,
    genero: "Ciencia Ficcion",
    rating: 8.6,
    tipo: "Película",
    visto: true,
    url: "/A1JVqNMI7UL.webp"
  }
];
