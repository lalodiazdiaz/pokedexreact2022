import styles from "./Ability.module.css";

export function Abilities({ ability }) {
  return (
    <div className={styles.abilities}>
      <h2 className={styles.titleAbility}>Abilities</h2>
      {ability.map((ability, i) => (
        <div key={i} className={styles.ability}>
          <p>{ability.ability.name}</p>
        </div>
      ))}
    </div>
  );
}
