import styles from "./Varieties.module.css";
import { colors } from "../extra/diseño";
export function Varieties({varieties,types,official}) {

    // const imgUrl = `https://img.pokemondb.net/sprites/home/normal/`;

    console.log(official);

    return (
        <div className={styles.contEvolution}>
      <h2 className={styles.titleEvolution}>Varieties forms</h2>
      {varieties.map((variety,i) => (
        <div key={i} className={styles.imgEv}>
          <img
            style={{ backgroundColor: "#" + colors[types[0].type.name] }}
            src={official}
            alt=""
          />
          <p>{variety.pokemon.name}</p>
        </div>
      ))}
    </div>
    )
}
