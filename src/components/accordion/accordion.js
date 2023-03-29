import { useState } from "react";

import styles from "./accordion.module.css";

export function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  const { title, content } = props;

  return (
    <div className={styles.accordion}>
      <div
        className={styles["accordion-title"]}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className={styles["accordion-content"]}>{content}</div>}
    </div>
  );
}
