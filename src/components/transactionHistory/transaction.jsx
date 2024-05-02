import styles from './transaction.module.css';

const Transaction = props => {
  return (
    <tr className={styles.row} id={props.id}>
      <th className={styles.header}> {props.type}</th>
      <th className={styles.header}>{props.amount}</th>
      <th className={styles.header}>{props.currency}</th>
    </tr>
  );
};

export default Transaction;
