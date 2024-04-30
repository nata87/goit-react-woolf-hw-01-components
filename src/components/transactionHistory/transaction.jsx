const Transaction = props => {
  return (
    <tr id={props.id}>
      <th> {props.type}</th>
      <th>{props.amount}</th>
      <th>{props.currency}</th>
    </tr>
  );
};

export default Transaction;
