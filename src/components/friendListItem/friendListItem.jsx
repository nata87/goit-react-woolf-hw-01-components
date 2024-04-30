const FriendListItem = props => {
  return (
    <li class="item">
      <span
        class="status"
        style={{ backgroundColor: props.isOnline ? 'green' : 'red' }}
      ></span>
      <img class="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p class="name">{props.name}</p>
    </li>
  );
};

export default FriendListItem;
