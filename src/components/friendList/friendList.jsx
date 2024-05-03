import FriendListItem from 'components/friendListItem/friendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={name}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
