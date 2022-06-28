import { useEffect, useState } from "react";
import {
  getPokeData,
  // mega,
  urlGen1,
  urlGen2,
  urlGen3,
  urlGen4,
  urlGen5,
  urlGen6,
  urlGen7,
  urlGen8,
} from "../API/service";
import { GridPoke } from "../components/GridPoke";
import Pagination from "../components/Pagination";
import styles from "../App.module.css";
import { Generations } from "../components/Generations";
import { Header } from "../components/Header";

export function Home() {
  const [pokeData, setPokeData] = useState([]);
  const [info, setInfo] = useState({});
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [onPagination, setonPagination] = useState(true);

  const baseurl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  const getKanto = () => {
    getPokemon(urlGen1);
    setonPagination(false);
  };

  const getJohto = () => {
    getPokemon(urlGen2);
    setonPagination(false);
  };
  const getHoenn = () => {
    getPokemon(urlGen3);
    setonPagination(false);
  };
  const getSinnoh = () => {
    getPokemon(urlGen4);
    setonPagination(false);
  };
  const getUnova = () => {
    getPokemon(urlGen5);
    setonPagination(false);
  };
  const getKalos = () => {
    getPokemon(urlGen6);
    setonPagination(false);
  };
  const getAlola = () => {
    getPokemon(urlGen7);
    setonPagination(false);
  };
  const getGalar = () => {
    getPokemon(urlGen8);
    setonPagination(false);
  };
  // const getMega = () => {
  //   getPokemon(mega);
  //   setonPagination(false);
  // };
  const onPrevious = () => {
    getPokemon(prev);
  };

  const onNext = () => {
    getPokemon(next);
  };

  const backStart = () => {
    getPokemon(baseurl);
    setonPagination(true);
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
    <div className={styles.contMainPage}>
      <Header start={backStart} />

      <Generations
        kanto={getKanto}
        johto={getJohto}
        hoenn={getHoenn}
        sinnoh={getSinnoh}
        unova={getUnova}
        kalos={getKalos}
        alola={getAlola}
        galar={getGalar}
        // mega ={getMega}
      />
      {onPagination ? (
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
      ) : (
        <main>
          <GridPoke pokeData={pokeData} />
        </main>
      )}
    </div>
  );
}
