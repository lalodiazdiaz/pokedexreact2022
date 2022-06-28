import { colors } from "../extra/diseño";
import styles from "./Evolutions.module.css";
export function Evolutions({ chain, types }) {



  // console.log(chain.evolves_to);
  const imgUrl = `https://img.pokemondb.net/sprites/home/normal/`;

  


  const evs = [];

  if (chain.evolves_to.length>2){
    
    evs.push(chain.species.name);
    chain.evolves_to.map((ev)=>(
      evs.push(ev.species.name)
    ))
    
    
  }else{
    if (chain.evolves_to.length < 1) {
      evs.push(chain.species.name);
    } else if (chain.evolves_to[0].evolves_to.length < 1) {
      evs.push(chain.species.name, chain.evolves_to[0].species.name);
    } else if (chain.evolves_to[0].evolves_to.length > 0) {
      evs.push(
        chain.species.name,
        chain.evolves_to[0].species.name,
        chain.evolves_to[0].evolves_to[0].species.name
      );
    }
  }



  return (
    <div className={styles.contEvolution}>
      <h2 className={styles.titleEvolution}>Evolution Chain</h2>
      {evs.map((ev,i) => (
        <div key={i} className={styles.imgEv}>
          <img
            style={{ backgroundColor: "#" + colors[types[0].type.name] }}
            src={imgUrl + ev + ".png"}
            alt=""
          />
          <p>{ev}</p>
        </div>
      ))}
    </div>
  );
}
