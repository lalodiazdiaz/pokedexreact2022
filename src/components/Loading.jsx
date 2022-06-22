import styles from "./Loading.module.css";
import spinner from "../extra/poke.png";
export function Loading() {
  return (
    <div className={styles.contSpinner}>
      <img className={styles.spinner} src={spinner} alt="" />
    </div>
  );
}
