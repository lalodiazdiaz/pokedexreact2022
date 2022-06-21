import { colors, TYPE_IMAGE } from "../extra/diseño";
import styles from "./Effectiveness.module.css";

export function Effectiveness({ effective, name }) {
  //   console.log(effective.double_damage_from);

  return (
    <div className={styles.contTypes}>
      <p className={styles.titleEffec}>Type effectiveness </p>
      <p className={styles.subTitle}>double damage from: </p>
      <div className={styles.type}>
        {effective.double_damage_from.map((data) => (
          <img
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
      <p className={styles.subTitle}>double_damage_to: </p>
      <div className={styles.type}>
        {effective.double_damage_to.map((data) => (
          <img
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
      <p className={styles.subTitle}>half_damage_from: </p>
      <div className={styles.type}>
        {effective.half_damage_from.map((data) => (
          <img
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
      <p className={styles.subTitle}>half_damage_to: </p>
      <div className={styles.type}>
        {effective.half_damage_to.map((data) => (
          <img
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
      <p className={styles.subTitle}>no_damage_from: </p>
      <div className={styles.type}>
        {effective.no_damage_from.map((data) => (
          <img
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
      <p className={styles.subTitle}>no_damage_to: </p>
      <div className={styles.type}>
        {effective.no_damage_to.map((data) => (
          <img
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