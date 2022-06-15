import styles from "./GridPoke.module.css";
import { PokeCard } from "./PokeCard";

export function GridPoke({ pokeData }) {
  return (
    <div className={styles.gridCont}>
      {pokeData.map((poke, i) => (
        <PokeCard key={i} name={poke.name} />
      ))}
    </div>
  );
}
