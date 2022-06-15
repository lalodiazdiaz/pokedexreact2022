import { useEffect, useState } from "react";
import { getPokeData } from "./API/service";
import { GridPoke } from "./components/GridPoke";
import { Header } from "./components/Header";
import Pagination from "./components/Pagination";
import styles from "./App.module.css";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [info, setInfo] = useState({});
  const baseurl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  const onPrevious = () => {
    getPokemon(info.previous);
  };

  const onNext = () => {
    getPokemon(info.next);
  };

  const getPokemon = (url) => {
    getPokeData(url).then((data) => {
      setPokeData(data.results);
      setInfo(data);
    });
  };
  useEffect(() => {
    getPokemon(baseurl);
  }, []);

  return (
    <div className={styles.cont}>
      <header>
        <Header />
      </header>
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

export default App;
