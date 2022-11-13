import styles from "./App.module.css";
import Button from "./Button";

function App({ title }) {
  return (
    <div>
      <h1 className={styles.app}>{title}</h1>
      <Button text={"continue"} />
    </div>
  );
}

export default App;
