import Image from "next/image";
import { useRouter } from "next/router";
import { Layout, Button } from "@/components";

import styles from "./topic.module.css";

export default function Topic() {
  const {
    push,
    query: { id },
  } = useRouter();

  const sidebarContent = (
    <div className={styles.sidebarContent}>
      <Image src="/logo.svg" alt="logo" width={80} height={50} priority />
      <h1>lOREM iPSUM Lorem: Topic {id}</h1>
      <Button
        label="Begin"
        onClick={() => {
          push({ pathname: `/topic/view/[id]`, query: { id } });
        }}
      />
    </div>
  );

  return (
    <Layout sidebarContent={sidebarContent}>
      <div className={styles.container}></div>
    </Layout>
  );
}
