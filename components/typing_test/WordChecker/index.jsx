import styles from "./styles.module.css"

export default function Test() {
  return(
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Keyboard Hero</h1>
        <textarea 
          className={styles.testInput}
        />
      </section>
    </>
  );
}