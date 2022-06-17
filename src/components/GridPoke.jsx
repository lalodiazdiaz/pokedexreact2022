import styles from "./GridPoke.module.css";
import { PokeCard } from "./PokeCard";

export function GridPoke({ pokeData }) {
  return (
    <div className={styles.gridCont}>
      {pokeData.map((poke, pokeId) => (
        <PokeCard key={pokeId} name={poke.name} />
      ))}
    </div>
  );
}
