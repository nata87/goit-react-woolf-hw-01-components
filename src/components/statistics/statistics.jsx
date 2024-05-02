import styles from './statistics.module.css';

const Statistics = props => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{props.title}</h2>

      <ul className={styles.statList}>
        <li className={styles.item}>
          <span className={styles.label}>.docx</span>
          <span className={styles.percentage}>{props.stats.docx}%</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>.mp3</span>
          <span className={styles.percentage}>{props.stats.mp3}%</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>.pdf</span>
          <span className={styles.percentage}>{props.stats.pdf}%</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>.mp4</span>
          <span className={styles.percentage}>{props.stats.mp4}%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
