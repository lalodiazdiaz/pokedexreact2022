import styles from "./Stats.module.css";

export function Stats({ stats }) {
  return (
    <div className={styles.stats}>
      <h2 className={styles.titlestast}>Stats</h2>
      {stats.map((stat, i) => (
        <div key={i} className={styles.stat}>
          <p>{stat.stat.name}</p>
          <p>{stat.base_stat}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
