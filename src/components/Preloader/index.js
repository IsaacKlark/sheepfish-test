import styles from "./styles.module.css";

const Preloader = ({ display, onlyCircle }) => {
  if (!display) return null;

  if (onlyCircle) {
    return <div className={styles["lds-dual-ring"]}></div>;
  }

  return (
    <div className={styles.background}>
      <div className={styles["lds-dual-ring"]}></div>
    </div>
  );
};

export default Preloader;