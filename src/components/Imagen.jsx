import styles from "./Imagen.module.css";
import { colors } from "../extra/diseño";

export function Imagen({ name, id, types }) {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
  console.log(types);
  return (
    <div
      className={styles.contImg}
      style={{ backgroundColor: "#" + colors[types] }}
    >
      <img src={imgUrl} alt={name} className={styles.img} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}
