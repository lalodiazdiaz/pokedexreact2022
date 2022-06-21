import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokemon, pokemonSpecies, typeEfective } from "../API/service";
import { Abilities } from "../components/Abilities";
import styles from "./Details.module.css";
import { Imagen } from "../components/Imagen";
import { Stats } from "../components/Stats";
import { Info } from "../components/Info";
import { Moves } from "../components/Moves";
import { Types } from "../components/Types";
import { Effectiveness } from "../components/Effectiveness";
import { Eggs } from "../components/Eggs";
export function Details() {
  const { pokeName } = useParams();
  const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  const typeUrl = "https://pokeapi.co/api/v2/type/";

  const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/";

  const [dataPoke, setDataPoke] = useState({});
  const [loading, setLoading] = useState(true);
  const [efective, setEfective] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    pokemon(pokeApi).then((data) => {
      setDataPoke(data);
      typeEfective(typeUrl + data.types[0].type.name).then((type) => {
        setEfective(type);
        pokemonSpecies(speciesUrl + data.id).then((specie) => {
          setSpecies(specie);
          setLoading(false);
        });
      });
    });
  }, [pokeApi]);

  if (loading) {
    return <p>cargando</p>;
  }

  return (
    <div className={styles.mainCont}>
      <div className={styles.cont}>
        <div className={styles.contImage}>
          <Imagen
            types={dataPoke.types[0].type.name}
            name={pokeName}
            id={dataPoke.id}
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
      </div>
    </div>
  );
}
