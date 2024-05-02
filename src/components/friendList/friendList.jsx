import FriendListItem from 'components/friendListItem/friendListItem';
import styles from './friendList.module.css';

const FriendList = props => {
  return (
    <ul className={styles.friendList}>
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
