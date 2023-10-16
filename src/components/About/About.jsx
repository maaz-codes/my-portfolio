import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend React Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites and projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Schooling</h3>
              <p>
                Bachelor of Computer Applications 
                from <b>Vivekananda Institute of Professional Studies</b> <br />
                <em>Rank : 600 ---- CGPA : 8.91</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
