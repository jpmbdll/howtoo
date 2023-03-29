import Image from "next/image";
import Link from "next/link";

import styles from "./welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Lorem Ipsum</h1>
        <Image src="/logo.svg" alt="logo" width={300} height={200} priority />
        <Link href="/home">
          <p> &#62; Click begin to get started</p>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/globe.svg" alt="Globe" width={750} height={850} priority />
      </div>
    </div>
  );
}
