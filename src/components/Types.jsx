import { TYPE_IMAGE } from "../extra/diseño";

import styles from "./Types.module.css";

export function Types({ types }) {
  return (
    <div className={styles.cont}>
      {types.length > 1 ? (
        <div className={styles.types}>
          {types.map((type, i) => (
            <div key={i} className={styles.type}>
              <p>{type.type.name}</p>
              <img src={TYPE_IMAGE[type.type.name]} alt="" />
              <br />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.types}>
          <div className={styles.Onetype}>
            <p>{types[0].type.name}</p>
            <img src={TYPE_IMAGE[types[0].type.name]} alt="" />
            <br />
          </div>
        </div>
      )}
    </div>
  );
}
