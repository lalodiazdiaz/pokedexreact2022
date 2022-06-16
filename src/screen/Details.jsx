import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokemon } from "../API/service";
import styles from "./Details.module.css";

export function Details() {
  const { pokeName } = useParams();
  const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  const imgUrl = `https://img.pokemondb.net/artwork/large/${pokeName}.jpg`;

  const [dataPoke, setDataPoke] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pokemon(pokeApi).then((data) => {
      setDataPoke(data);
      setLoading(false);
    });
  }, [pokeApi]);
  console.log(dataPoke);

  if (loading) {
    return <p>cargando</p>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.cont}>
        <div className={styles.contImage}>
          <img src={imgUrl} alt={pokeName} className={styles.img} />
          <p className={styles.name}>{pokeName}</p>
          <div className={styles.details}>
            <p>ID: {dataPoke.id}</p>
            <p>Height: {dataPoke.height}</p>
            <p>Weight: {dataPoke.weight}</p>
            <p>Base experience: {dataPoke.base_experience}</p>
          </div>
        </div>
        {/* <div className={styles.DetailsStast}>
          <div className={styles.stats}>
            {dataPoke.stats.map((stat) => (
              <div className={styles.stat}>
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
                <br />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
