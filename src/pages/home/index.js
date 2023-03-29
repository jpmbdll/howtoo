import Image from "next/image";
import { Layout } from "@/components";

import styles from "./home.module.css";

export default function Home() {
  const sidebarContent = (
    <div className={styles.sidebarContent}>
      <Image src="/logo.svg" alt="logo" width={250} height={100} priority />
      <p>lOREM iPSUM Lorem</p>

      <p>
        dolor sit amet, consectetur adipiscing elit. Integer vitae nisl elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu
        leo elit. Donec condimentum odio ut ante bibendum, quis egestas quam
        semper.
      </p>

      <p>
        Donec tempus cursus magna a feugiat. Morbi scelerisque euismod aliquet.
        Integer ut euismod risus. Aenean a diam vel nisl accumsan cursus.
        Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. Ut
        eleifend sit amet justo eu laoreet.
      </p>
    </div>
  );

  return (
    <Layout sidebarContent={sidebarContent}>
      <div className={styles.container}></div>
    </Layout>
  );
}
