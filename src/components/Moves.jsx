import styles from "./Moves.module.css";

export function Moves({ moves }) {
  return (
    <div className={styles.stats}>
      <h2 className={styles.titlemoves}>Moves</h2>
      <div className={styles.moves}>
        <p>🔹 {moves[0].move.name}</p>
        <p>🔹 {moves[1].move.name}</p>
        <p>🔹 {moves[2].move.name}</p>
        <p>🔹 {moves[3].move.name}</p>
        <br />
      </div>
    </div>
  );
}
