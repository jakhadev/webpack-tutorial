import { useState } from "react";
import Filter from "./filter";
import styles from "./app.module.scss";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <Filter />

      <h1 className={styles.title}>Count: {count}</h1>
      <button onClick={increment} className={styles.button}>
        Increment
      </button>
    </div>
  );
};

export default App;
