import styles from "./Info.module.css";
export function Info({ info }) {
  return (
    <div className={styles.contInfo}>
      <h2 className={styles.titleInfo}>Details</h2>
      <p>ID: {info.id}</p>
      <p>Height: {info.height}</p>
      <p>Weight: {info.weight}</p>
      <p>Base experience: {info.base_experience}</p>
    </div>
  );
}
