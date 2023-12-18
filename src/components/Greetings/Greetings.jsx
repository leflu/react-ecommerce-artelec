import styles from "./greetings.module.css";
export const Greetings = ({ greeting, message }) => {
  return (
    <div className={styles.greetingsContainer}>
      <h2 className={styles.greetingsTitle}>{greeting}</h2>
      <h3 className={styles.greetingsDrop}>{message}</h3>
    </div>
  );
};
