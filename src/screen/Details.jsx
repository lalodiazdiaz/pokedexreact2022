import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokemon } from "../API/service";
import styles from "./Details.module.css";

const colors = {
  bug: "A8B820",
  dark: "705848",
  dragon: "7038F8",
  electric: "F8D030",
  fairy: "EE99AC",
  fighting: "C03028",
  fire: "F08030",
  flying: "A890F0",
  ghost: "705898",
  grass: "78C850",
  ground: "E0C068",
  ice: "98D8D8",
  normal: "A8A878",
  poison: "A040A0",
  psychic: "F85888",
  rock: "B8A038",
  steel: "B8B8D0",
  water: "6890F0",
};

const TYPE_IMAGE = {
  bug: "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Bug.png",
  dark: "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Dark.png",
  dragon:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Dragon.png",
  electric:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Electric.png",
  fairy:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Fairy.png",
  fighting:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Fighting.png",
  fire: "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Fire.png",
  flying:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Flying.png",
  ghost:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Ghost.png",
  grass:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Grass.png",
  ground:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Ground.png",
  ice: "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Ice.png",
  normal:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Normal.png",
  poison:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Poison.png",
  psychic:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Psychic.png",
  rock: "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Rock.png",
  steel:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Steel.png",
  water:
    "https://img.rankedboost.com/wp-content/plugins/pokemon_go_tier_list_usermang/assets/roles/Water.png",
};

export function Details() {
  const { pokeName } = useParams();
  const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

  const [dataPoke, setDataPoke] = useState({});
  const [loading, setLoading] = useState(true);
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${dataPoke.id}.png`;

  useEffect(() => {
    pokemon(pokeApi).then((data) => {
      setDataPoke(data);
      setLoading(false);
    });
  }, [pokeApi]);
  console.log(dataPoke);

  if (loading) {
    return <p>cargando</p>;
  }

  console.log(dataPoke.types.length);
  return (
    <div className={styles.main}>
      <div className={styles.cont}>
        <div
          className={styles.contImage}
          style={{ backgroundColor: "#" + colors[dataPoke.types[0].type.name] }}
        >
          <img src={imgUrl} alt={pokeName} className={styles.img} />
          <p className={styles.name}>{pokeName}</p>
          {dataPoke.types.length > 1 ? (
            <div className={styles.types}>
              {dataPoke.types.map((type) => (
                <div className={styles.type}>
                  <p>{type.type.name}</p>
                  <img src={TYPE_IMAGE[type.type.name]} alt="" />
                  <br />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.types}>
              <div className={styles.Onetype}>
                <p>{dataPoke.types[0].type.name}</p>
                <img src={TYPE_IMAGE[dataPoke.types[0].type.name]} alt="" />
                <br />
              </div>
            </div>
          )}
        </div>
        <div className={styles.DetailsStast}>
          <div className={styles.stats}>
            <h2 className={styles.titlemoves}>Details</h2>
            <p>ID: {dataPoke.id}</p>
            <p>Height: {dataPoke.height}</p>
            <p>Weight: {dataPoke.weight}</p>
            <p>Base experience: {dataPoke.base_experience}</p>
          </div>
          <div className={styles.stats}>
            <h2 className={styles.titlemoves}>Stats</h2>
            {dataPoke.stats.map((stat) => (
              <div className={styles.stat}>
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
                <br />
              </div>
            ))}
          </div>
          <div className={styles.stats}>
            <h2 className={styles.titlemoves}>Abilities</h2>
            <p>Abilities</p>
            {dataPoke.abilities.map((ability) => (
              <div className={styles.stat}>
                <p>{ability.ability.name}</p>

                <br />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.DetailsStast}>
          <div className={styles.stats}>
            <h2 className={styles.titlemoves}>Moves</h2>
            <div className={styles.moves}>
              <p>{dataPoke.moves[0].move.name}</p>
              <p>{dataPoke.moves[1].move.name}</p>
              <p>{dataPoke.moves[2].move.name}</p>
              <p>{dataPoke.moves[3].move.name}</p>
              <p>{dataPoke.moves[4].move.name}</p>
              <p>{dataPoke.moves[5].move.name}</p>
              <p>{dataPoke.moves[6].move.name}</p>
              <p>{dataPoke.moves[7].move.name}</p>
              <p>{dataPoke.moves[8].move.name}</p>
              <p>{dataPoke.moves[9].move.name}</p>
              <p>{dataPoke.moves[10].move.name}</p>
              <p>{dataPoke.moves[11].move.name}</p>
              <p>{dataPoke.moves[12].move.name}</p>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
