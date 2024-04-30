import Transaction from './transaction';
import './transactionHistory.css';

const TransactionHistory = props => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
