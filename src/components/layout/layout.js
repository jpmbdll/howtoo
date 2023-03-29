import { Sidebar, Nav } from "@/components";

import styles from "./layout.module.css";

export function Layout(props) {
  const { sidebarContent, children } = props;

  return (
    <div className={styles.container}>
      <Sidebar>{sidebarContent}</Sidebar>
      <div className={styles.content}>{children}</div>
      <Nav />
    </div>
  );
}
