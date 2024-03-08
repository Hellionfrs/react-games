import { projects } from "../../locales/projects";
import DisplayProject from "../DisplayProject";
import styles from "./Projects.module.css";

function Project() {
  return (
    <section className={styles.projects}>
      <div className={styles.wrapper}>
        {projects.map((project) => {
          return (
            <DisplayProject
              project={project}
            />
          );
        })}
        
        {/* <DisplayProject
          img={pokeapi}
          title={"Poke Collection"}
          labels={["useState", "useContext", "useEffect", "otherFeature"]}
        />
        <DisplayProject
          img={wordle}
          title={"React Wordle"}
          labels={["useState", "useContext", "useEffect", "otherFeature"]}
        />
        <DisplayProject
          img={youtube}
          title={"Video Feed"}
          labels={["useState", "useContext", "useEffect", "otherFeature"]}
        /> */}
      </div>
    </section>
  );
}

export default Project;
