import styles from "./Info.module.css";
export function Info({ info }) {
  return (
    <div className={styles.contInfo}>
      <h2 className={styles.titleInfo}>Details</h2>
      <div className={styles.data}>
        <p>ID:</p>
        <p> {info.id}</p>
      </div>
      <div className={styles.data}>
        <p>Height: </p>
        <p>{info.height}</p>
      </div>
      <div className={styles.data}>
        <p>Weight: </p>
        <p>{info.weight}</p>
      </div>
      <div className={styles.data}>
        <p>Base experience: </p>
        <p> {info.base_experience}</p>
      </div>
    </div>
  );
}
