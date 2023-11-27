import styles from "./button.module.css";

export const Button = ({ textButton = "Button", variant }) => {
  const stylesButton = styles[variant];

  return <button className={`${stylesButton} `}>{textButton}</button>;
};
