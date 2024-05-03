import Transaction from './transaction';
import styles from './transactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.history}>
      <thead>
        <tr>
          <th className={styles.header}>Type</th>
          <th className={styles.header}>Amount</th>
          <th className={styles.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <Transaction
              id={id}
              type={type}
              amount={amount}
              currency={currency}
              key={id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
