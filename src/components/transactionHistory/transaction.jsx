import styles from './transaction.module.css';

const Transaction = ({ id, type, amount, currency }) => {
  return (
    <tr className={styles.row} id={id}>
      <th className={styles.header}> {type}</th>
      <th className={styles.header}>{amount}</th>
      <th className={styles.header}>{currency}</th>
    </tr>
  );
};

export default Transaction;
