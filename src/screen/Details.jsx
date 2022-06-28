import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getChainEvolution,
  pokemon,
  pokemonSpecies,
  typeEfective,
} from "../API/service";
import { Abilities } from "../components/Abilities";
import styles from "./Details.module.css";
import { Imagen } from "../components/Imagen";
import { Stats } from "../components/Stats";
import { Info } from "../components/Info";
import { Moves } from "../components/Moves";
import { Types } from "../components/Types";
import { Effectiveness } from "../components/Effectiveness";
import { Eggs } from "../components/Eggs";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { Evolutions } from "../components/Evolutions";
// import { Varieties } from "../components/Varieties";
export function Details() {
  const { pokeName } = useParams();
  const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  const typeUrl = "https://pokeapi.co/api/v2/type/";

  const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/";

  const [dataPoke, setDataPoke] = useState({});
  const [loading, setLoading] = useState(true);
  const [efective, setEfective] = useState([]);
  const [species, setSpecies] = useState([]);
  const [chainEvolution, setChainEvolution] = useState([]);

  useEffect(() => {
    pokemon(pokeApi).then((data) => {
      setDataPoke(data);
      typeEfective(typeUrl + data.types[0].type.name).then((type) => {
        setEfective(type);
        pokemonSpecies(speciesUrl + data.id).then((specie) => {
          setSpecies(specie);
          getChainEvolution(specie.evolution_chain.url).then((chain) => {
            setChainEvolution(chain);
            setLoading(false);
          });
        });
      });
    });
  }, [pokeApi]);

  return (
    <div style={{ width: "100%" }}>
      <Header />
      {!loading ? (
        <div className={styles.mainCont}>
          <div className={styles.cont}>
            <div className={styles.contImage}>
              <Imagen
                types={dataPoke.types[0].type.name}
                name={pokeName}
                id={dataPoke.id}
                official={dataPoke.sprites.other.home}
              />
              <Types types={dataPoke.types} />
            </div>
            <div className={styles.DetailsStast}>
              <Info info={dataPoke} />
              <Stats stats={dataPoke.stats} />
              <Abilities ability={dataPoke.abilities} />
            </div>
            <div className={styles.DetailsStast}>
              <Moves moves={dataPoke.moves} />
              <Eggs data={species} />
            </div>
            <div className={styles.contTypesEfec}>
              <Effectiveness
                effective={efective.damage_relations}
                name={efective.name}
              />
            </div>

            <div className={styles.contTypesEfec}>
              <Evolutions chain={chainEvolution} types={dataPoke.types} />
            </div>
            {/* <div className={styles.contTypesEfec}>
              <Varieties varieties={species.varieties} types={dataPoke.types}  official={dataPoke.sprites.other.home.front_default}/>
            </div> */}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
