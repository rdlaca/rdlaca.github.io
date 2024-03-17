import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { RichmondSCSTimeline } from "@site/src/components/react/richmond_scs";
import styles from "./styles.module.css";

export function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <RichmondSCSTimeline />
      </div>
    </section>
  );
}

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p>
          &quot;Between a high, solid wall and an egg that breaks it, I will
          always stand on the side of the egg.&quot;
        </p>
        <p>― Haruki Murakami</p>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} />
      </div>
    </header>
  );
}
