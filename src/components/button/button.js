import styles from "./button.module.css";
//test
export function Button(props) {
  const { label, onClick } = props;
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}
