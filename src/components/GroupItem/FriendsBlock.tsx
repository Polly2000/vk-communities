import { FC, useState } from 'react';
import { Caption } from '@vkontakte/vkui';
import { User } from '../../redux/groups/types';
import classes from './GroupItem.module.css';

const FriendsBlock: FC<any> = ({ friends }) => {
  const [friendsClicked, setFriendsClicked] = useState<boolean>(false);
  const friendsCount: number | undefined = friends?.length || 0;

  const clickedHandler = () => {
    setFriendsClicked(!friendsClicked);
  };

  return (
    <div className={classes.friendBlock}>
      <Caption level="1" onClick={() => clickedHandler()} className={classes.friends}>
        Друзья: {friendsCount}
      </Caption>
      {friendsClicked === true && (
        <div className={classes.userFriends}>
          {friends.map((item: User, index: number) => (
            <Caption level="2" key={index}>{`${item.first_name} ${item.last_name}`}</Caption>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsBlock;
