import styles from "./sidebar.module.css";

export function Sidebar(props) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}
