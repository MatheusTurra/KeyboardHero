import styles from "./styles.module.css"

export default function WordChecker() {
  return(
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Keyboard Hero</h1>
        <textarea 
          className={styles.testText}
        />
        <div className={styles.userInputContainer}>
          <input type="text" className={styles.userInput}/>
        </div>
      </section>
    </>
  );
}