import Transaction from './transaction';
import styles from './transactionHistory.module.css';

const TransactionHistory = props => {
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
        {props.transactions.map(transaction => {
          return (
            <Transaction
              id={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              key={transaction.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
