import styles from "./Generation.module.css";
import Menu from "react-animenu";
export function Generations({
  kanto,
  johto,
  hoenn,
  sinnoh,
  unova,
  kalos,
  alola,
  galar,
  // mega
}) {
  const handleGen1 = () => {
    kanto();
  };
  const handleGen2 = () => {
    johto();
  };
  const handleGen3 = () => {
    hoenn();
  };
  const handleGen4 = () => {
    sinnoh();
  };
  const handleGen5 = () => {
    unova();
  };
  const handleGen6 = () => {
    kalos();
  };
  const handleGen7 = () => {
    alola();
  };
  const handleGen8 = () => {
    galar();
  };
  // const handleMega = () => {
  //   mega();
  // };
  return (
    <div className={styles.contMenu}>
      <Menu
        menuBackgroundColor="#778899"
        buttonColorOpen="black"
        iconTextWhenOpen="Cerrar"
        iconTextWhenClosed="Generations"
        buttonColorClosed="black"
      >
        <h1>Generations</h1>
        <div className={styles.contButtons}>
          <button onClick={handleGen1}> Generation 1</button>

          <button onClick={handleGen2}> Generation 2</button>
          <button onClick={handleGen3}> Generation 3</button>
          <button onClick={handleGen4}> Generation 4</button>
          <button onClick={handleGen5}> Generation 5</button>
          <button onClick={handleGen6}> Generation 6</button>
          <button onClick={handleGen7}> Generation 7</button>
          <button onClick={handleGen8}> Generation 8</button>
          {/* <button onClick={handleMega}> Mega evolutions</button> */}
        </div>
      </Menu>
    </div>
  );
}
