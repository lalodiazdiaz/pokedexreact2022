import { MdCatchingPokemon } from "react-icons/md";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className={styles.cont}>
      <Link to={"/"} className={styles.header}>
        <MdCatchingPokemon size={50} color="red" className={styles.icon} />
        <h1 className={styles.title}>Pokedex</h1>
      </Link>
    </div>
  );
}
