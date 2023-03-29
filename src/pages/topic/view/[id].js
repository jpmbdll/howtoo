import { useRouter } from "next/router";
import { Accordion } from "@/components";
import styles from "./topic-view.module.css";
import { Fragment } from "react";

//private
const content = [
  {
    title: "Title 1",
    content:
      "Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,sit amet.  Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sitamet.Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,sit amet.",
  },
  {
    title: "Title 2",
    content:
      "Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,sit amet.  Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sitamet.Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,sit amet.",
  },
  {
    title: "Title 3",
    content:
      "Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,sit amet.  Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sitamet.Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,sit amet.",
  },
  {
    title: "Title 4",
    content:
      "Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,sit amet.  Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sitamet.Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,sit amet.",
  },
];

export default function TopicView() {
  const {
    query: { id },
  } = useRouter();

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>NULLSDA TOPIC: {id}</h1>
          <p>Nulla imperdiet Vestibulum dapibus hendrerit nibh ut ornare.</p>
          <p>
            Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit
            amet.Sed porta, lorem a sodales rhoncus, neque ligula dictum libero,
            sit amet.
          </p>
        </div>
        <div className={styles.content}>
          {content.map(({ title, content }, index) => (
            <Accordion key={index} title={title} content={content} />
          ))}
        </div>
      </div>
      <div className={styles.actions}>
        <button>Back</button>
        <button>Next</button>
      </div>
    </Fragment>
  );
}
