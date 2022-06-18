import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokemon } from "../API/service";
import { Abilities } from "../components/Abilities";
import styles from "./Details.module.css";
import { Imagen } from "../components/Imagen";
import { Stats } from "../components/Stats";
import { Info } from "../components/Info";
import { Moves } from "../components/Moves";
import { Types } from "../components/Types";
export function Details() {
  const { pokeName } = useParams();
  const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

  const [dataPoke, setDataPoke] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pokemon(pokeApi).then((data) => {
      setDataPoke(data);
      setLoading(false);
    });
  }, [pokeApi]);

  if (loading) {
    return <p>cargando</p>;
  }

  return (
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
      </div>
    </div>
  );
}
