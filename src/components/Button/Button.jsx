import styles from "./button.module.css";

export const Button = ({ textButton = "Button", variant, onClick }) => {
  const stylesButton = styles[variant];
  const detailsButton = styles[variant];

  return (
    <button className={`${stylesButton} `} onClick={onClick}>
      {textButton}
    </button>
  );
};
