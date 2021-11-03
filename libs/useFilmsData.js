import { useEffect, useState } from "react";
import filmsData from "../data/films.json";

export default function useFilmsData() {
  const [films, setFilms] = useState(filmsData);

  useEffect(() => {
    setFilms([
      { title: "Action", data: films.slice(0, 10) },
      { title: "Adventure", data: films.slice(10, 20) },
      { title: "Comedy", data: films.slice(20, 30) },
      { title: "Shounen", data: films.slice(30, 40) },
      { title: "Super Power", data: films.slice(40, 50) },
    ]);
  }, []);

  return { films };
}
