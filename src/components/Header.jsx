import { MdCatchingPokemon } from "react-icons/md";
import styles from "./Header.module.css";
export function Header() {
  return (
    <div className={styles.cont}>
      <MdCatchingPokemon size={60} color="red" className={styles.icon} />
      <h1 className={styles.title}>Pokedex</h1>
    </div>
  );
}
