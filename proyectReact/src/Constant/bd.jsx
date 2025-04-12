
export const generos = [
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


export const ArrayPelisSeries = [
  {
    id: 1,
    titulo: "Matrix",
    director: "Lilly Wachowski",
    anio: 1999,
    genero: "Ciencia Ficcion",
    rating: 3,
    tipo: "Película",
    visto: false
  },
  {
    id: 2,
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    anio: 1972,
    genero: "Drama",
    rating: 9.7,
    tipo: "Película",
    visto: false
  },
  {
    id: 3,
    titulo: "Inception",
    director: "Christopher Nolan",
    anio: 2010,
    genero: "Terror",
    rating: 9.0,
    tipo: "Película",
    visto: false
  },
  {
    id: 4,
    titulo: "Parasite",
    director: "Bong Joon-ho",
    anio: 2019,
    genero: "Comedia",
    rating: 6,
    tipo: "Película",
    visto: false
  },
  {
    id: 5,
    titulo: "Breaking Bad",
    director: "Vince Gilligan",
    anio: 2008,
    genero: "Crimen",
    rating: 9.5,
    tipo: "Serie",
    visto: false
  },
  {
    id: 6,
    titulo: "Stranger Things",
    director: "Hermanos Duffer",
    anio: 2016,
    genero: "Ciencia Ficcion",
    rating: 0,
    tipo: "Serie",
    visto: false
  },
  {
    id: 7,
    titulo: "Stranger Things",
    director: "Hermanos Duffer",
    anio: 2016,
    genero: "Ciencia Ficcion",
    rating: 4,
    tipo: "Serie",
    visto: false
  },
  {
    id: 10,
    titulo: "Matrix",
    director: "Lilly Wachowski",
    anio: 1999,
    genero: "Ciencia Ficcion",
    rating: 3,
    tipo: "Película",
    visto: true
  }
];

export const ordenamientoDescendente = () => {
  if (arrayModPelis.length === 0) {
    setArrayModPelis([]);
    return;
  }
  const arrayAux = [...arrayModPelis].sort((a, b) => b.anio - a.anio); 
  setArrayModPelis(arrayAux);
};

export const ordenamientoAscendente = () => {
  if (arrayModPelis.length === 0) {
      setArrayModPelis([]);
      return;
  }
  const arrayAux = [...arrayModPelis].sort((a, b) => a.anio - b.anio); 
  setArrayModPelis(arrayAux);
};

export const ordenamientoAscendenteRating = () => {
  if (arrayModPelis.length === 0) {
      setArrayModPelis([]);
      return;
  }
  const arrayAux = [...arrayModPelis].sort((a, b) => a.rating - b.rating); 
  setArrayModPelis(arrayAux);
};
export const ordenamientoDescendenteRating = () => {
  if (arrayModPelis.length === 0) {
      setArrayModPelis([]);
      return;
  }
  const arrayAux = [...arrayModPelis].sort((a, b) => b.rating - a.rating); 
  setArrayModPelis(arrayAux);
};

