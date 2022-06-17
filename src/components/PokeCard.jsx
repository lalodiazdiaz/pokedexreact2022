import style from "./pokeCard.module.css";
import { Link } from "react-router-dom";

export function PokeCard({ name, id }) {
  const imgUrl = `https://img.pokemondb.net/sprites/home/normal/${name}.png`;

  return (
    <Link to={`Details/${name}`}>
      <div className={style.cardCont}>
        <img src={imgUrl} alt={name} className={style.img} />
        <p className={style.name}>{name}</p>
      </div>
    </Link>
  );
}
