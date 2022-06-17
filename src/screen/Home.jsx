import { useEffect, useState } from "react";
import { getPokeData } from "../API/service";
import { GridPoke } from "../components/GridPoke";
import Pagination from "../components/Pagination";
import styles from "../App.module.css";

export function Home() {
  const [pokeData, setPokeData] = useState([]);
  const [info, setInfo] = useState({});
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  const baseurl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  const onPrevious = () => {
    getPokemon(prev);
  };

  const onNext = () => {
    getPokemon(next);
  };

  const getPokemon = (url) => {
    getPokeData(url).then((data) => {
      setNext(data.next);
      setPrev(data.previous);
      setPokeData(data.results);
      setInfo(data);
    });
  };

  useEffect(() => {
    getPokemon(baseurl);
  }, []);

  return (
    <div className={styles.cont}>
      <main>
        <Pagination
          next={info.next}
          prev={info.previous}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <GridPoke pokeData={pokeData} />
        <Pagination
          next={info.next}
          prev={info.previous}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </main>
    </div>
  );
}
