import styles from "./Imagen.module.css";
import { colors } from "../extra/diseño";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function Imagen({ name, types,official }) {




  // const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

 
  return (
    <Carousel showIndicators={false} showThumbs={false} showStatus={false}>
    <div
      className={styles.contImg}
      style={{ backgroundColor: "#" + colors[types] }}
    >
      <img src={official.front_default} alt={name} className={styles.img} />
      <p className={styles.name}>{name}</p>
    </div>
    <div
      className={styles.contImg}
      style={{ backgroundColor: "#" + colors[types] }}
    >
      <img src={official.front_shiny} alt={name} className={styles.img} />
      <p className={styles.name}>{name} shiny</p>
    </div>
    </Carousel>
  );
}
