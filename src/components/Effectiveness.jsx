import { colors, TYPE_IMAGE } from "../extra/diseño";
import styles from "./Effectiveness.module.css";

export function Effectiveness({ effective, name }) {
  return (
    <div className={styles.contTypes}>
      <p className={styles.titleEffec}>Type effectiveness </p>
      <p className={styles.subTitle}>double damage from: </p>
      <div className={styles.type}>
        {effective.double_damage_from.map((data, i) => (
          <img
            key={i}
            src={TYPE_IMAGE[data.name]}
            alt=""
            style={{
              backgroundColor: "#" + colors[data.name],
              borderRadius: "50%",
              border: "3px solid black",
            }}
          />
        ))}
      </div>
      <p className={styles.subTitle}>Double damage to: </p>
      <div className={styles.type}>
        {effective.double_damage_to.map((data, i) => (
          <img
            key={i}
            src={TYPE_IMAGE[data.name]}
            alt=""
            style={{
              backgroundColor: "#" + colors[data.name],
              borderRadius: "50%",
              border: "3px solid black",
            }}
          />
        ))}
      </div>
      <p className={styles.subTitle}>Half damage from: </p>
      <div className={styles.type}>
        {effective.half_damage_from.map((data, i) => (
          <img
            key={i}
            src={TYPE_IMAGE[data.name]}
            alt=""
            style={{
              backgroundColor: "#" + colors[data.name],
              borderRadius: "50%",
              border: "3px solid black",
            }}
          />
        ))}
      </div>
      <p className={styles.subTitle}>Half damage to: </p>
      <div className={styles.type}>
        {effective.half_damage_to.map((data, i) => (
          <img
            key={i}
            src={TYPE_IMAGE[data.name]}
            alt=""
            style={{
              backgroundColor: "#" + colors[data.name],
              borderRadius: "50%",
              border: "3px solid black",
            }}
          />
        ))}
      </div>
      <p className={styles.subTitle}>No damage from: </p>
      <div className={styles.type}>
        {effective.no_damage_from.map((data, i) => (
          <img
            key={i}
            src={TYPE_IMAGE[data.name]}
            alt=""
            style={{
              backgroundColor: "#" + colors[data.name],
              borderRadius: "50%",
              border: "3px solid black",
            }}
          />
        ))}
      </div>
      <p className={styles.subTitle}>No damage to: </p>
      <div className={styles.type}>
        {effective.no_damage_to.map((data, i) => (
          <img
            key={i}
            src={TYPE_IMAGE[data.name]}
            alt=""
            style={{
              backgroundColor: "#" + colors[data.name],
              borderRadius: "50%",
              border: "3px solid black",
            }}
          />
        ))}
      </div>
    </div>
  );
}
