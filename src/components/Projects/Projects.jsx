import { projects } from "../../locales/projects";
import DisplayProject from "../DisplayProject";
import styles from "./Projects.module.css";

function Project() {
  return (
    <section className={styles.projects}>
      <div className={styles.wrapper}>
        {projects.map((project) => {
          return (
            <DisplayProject key={project.title}
              project={project}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Project;
