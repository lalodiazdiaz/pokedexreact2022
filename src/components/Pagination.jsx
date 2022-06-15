import styles from "./Pagination.module.css";
 const Pagination=({ prev, next, onPrevious, onNext })=> {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <div className={styles.containerpag}>
        {prev ? (
          <div className={styles.containerbutton}>
            <button className={styles.buttonpag} onClick={handlePrevious}>
              Previous
            </button>
          </div>
        ) : null}

        {next ? (
          <div className={styles.containerbutton}>
            <button className={styles.buttonpag} onClick={handleNext}>
              Next
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Pagination
