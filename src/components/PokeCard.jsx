import style from "./pokeCard.module.css";

export function PokeCard({ name }) {
  const imgUrl = `https://img.pokemondb.net/sprites/home/normal/${name}.png`;

  //   const imgUrl2 = `https://img.pokemondb.net/artwork/large/${name}.jpg`;
  return (
    <div className={style.cardCont}>
      <img src={imgUrl} alt={name} className={style.img} />
      <p>{name}</p>
    </div>
  );
}
