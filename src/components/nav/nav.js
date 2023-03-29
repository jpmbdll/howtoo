import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./nav.module.css";

//private
const links = [
  { link: "Home", url: "/home" },
  { link: "Topic 1", url: "/topic/1" },
  { link: "Topic 2", url: "/topic/2" },
  { link: "Topic 3", url: "/topic/3" },
  { link: "Topic 4", url: "/topic/4" },
  { link: "Topic 5", url: "/topic/5" },
];

export function Nav() {
  const {
    query: { id = null },
  } = useRouter();

  return (
    <div className={styles.container}>
      {links.map(({ link, url }, index) => {
        const active =
          (id === null && url === "/home") || url === `/topic/${id}`;
        return (
          <Link
            href={url}
            key={index}
            style={{
              padding: "10px",
              borderBottom: active ? "4px solid #55c6d7" : "none",
            }}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
