import styles from "./Info.module.css";
export function Info({ info }) {
  const Height = (info.height * 0.1).toFixed(1);
  const Weight = (info.weight * 0.1).toFixed(1);

  return (
    <div className={styles.contInfo}>
      <h2 className={styles.titleInfo}>Information</h2>
      <div className={styles.data}>
        <p>ID:</p>
        <p> {info.id}</p>
      </div>
      <div className={styles.data}>
        <p>Name:</p>
        <p> {info.name}</p>
      </div>
      <div className={styles.data}>
        <p>Height: </p>
        <p>{Height} m</p>
      </div>
      <div className={styles.data}>
        <p>Weight: </p>
        <p>{Weight} kg</p>
      </div>
      <div className={styles.data}>
        <p>Base experience: </p>
        <p> {info.base_experience} </p>
      </div>
    </div>
  );
}
