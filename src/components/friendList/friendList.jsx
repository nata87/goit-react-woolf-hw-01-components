import FriendListItem from 'components/friendListItem/friendListItem';

const FriendList = props => {
  return (
    <ul class="friend-list">
      {props.friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.name}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
