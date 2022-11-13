import styles from "./Button.module.css";
import PropTypes from "prop-types";

function button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default button;
