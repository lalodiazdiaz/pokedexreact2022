import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";

export function Details() {
  const { pokeName } = useParams();
  const imgUrl = `https://img.pokemondb.net/sprites/home/normal/${pokeName}.png`;

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className={styles.cont}>
          <div className={styles.contImage}>
            <img src={imgUrl} alt={pokeName} className={styles.img} />
          </div>
        </div>
      </main>
    </div>
  );
}
