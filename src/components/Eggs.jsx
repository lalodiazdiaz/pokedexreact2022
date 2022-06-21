import styles from "./Eggs.module.css";
export function Eggs({ data }) {
  const Capture = ((data.capture_rate * 100) / 255).toFixed();
  const Happyness = ((data.base_happiness * 100) / 255).toFixed();
  return (
    <div className={styles.contData}>
      <p className={styles.titleDetails}>Details</p>

      <h3 className={styles.contDetailSpecies}>Eggs Group:</h3>
      <div className={styles.eggs}>
        {data.egg_groups.map((egg, i) => (
          <p key={i} className={styles.eggGroup}>
            {egg.name}
          </p>
        ))}
      </div>
      <div className={styles.eggs}>
        <p>generation: </p>
        <p>{data.generation.name}</p>
      </div>
      <div className={styles.eggs}>
        <p>Base happiness: </p>
        <p>{Happyness}%</p>
      </div>
      <div className={styles.eggs}>
        <p>groth rate: </p>
        <p>{data.growth_rate.name}</p>
      </div>
      <div className={styles.eggs}>
        <p>Capture rate: </p>
        <p>{Capture}%</p>
      </div>
      <div className={styles.eggs}>
        <p>Habitat: </p>
        <p>{data.habitat.name}</p>
      </div>
      <div className={styles.eggs}>
        <p>Color: </p>
        <p>{data.color.name}</p>
      </div>
    </div>
  );
}
