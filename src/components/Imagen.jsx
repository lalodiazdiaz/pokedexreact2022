import styles from "./Imagen.module.css";
import { colors } from "../extra/diseño";

export function Imagen({ name, types,official }) {




  // const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

 
  return (
    <div
      className={styles.contImg}
      style={{ backgroundColor: "#" + colors[types] }}
    >
      <img src={official} alt={name} className={styles.img} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}
