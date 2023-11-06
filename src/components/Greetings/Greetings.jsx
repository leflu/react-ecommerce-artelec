import styles from "../../app.module.css";

export const Greetings = ({ greeting }) => {
  return (
    <div className={styles.greetings}>
      <h2>{greeting}</h2>
    </div>
  );
};
