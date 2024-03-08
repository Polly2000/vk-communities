import { FC } from 'react';
import { SimpleCell, Avatar, Text, Caption, Spacing } from '@vkontakte/vkui';
import { Group } from '../../redux/groups/types';
import FriendsBlock from './FriendsBlock';
import classes from './GroupItem.module.css';

const GroupItem: FC<Group> = ({ id, name, closed, avatar_color, members_count, friends }) => {
  const color =
    avatar_color === 'red'
      ? 1
      : avatar_color === 'orange'
      ? 2
      : avatar_color === 'yellow'
      ? 3
      : avatar_color === 'green'
      ? 4
      : avatar_color === 'blue'
      ? 5
      : 6;

  const followerCase = ['подписчик', 'подписчика', 'подписчиков'];
  const declOfNum = (number: number, titles: string[]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return (
      number +
      ' ' +
      titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]
    );
  };

  return (
    <div className={classes.group}>
      <SimpleCell
        expandable="auto"
        before={
          avatar_color !== undefined && avatar_color !== 'white' ? (
            <Avatar size={100} gradientColor={color} />
          ) : (
            <Avatar size={100} style={{ backgroundColor: `${avatar_color}` }} />
          )
        }>
        <div>
          <Text weight="2">{name}</Text>
          <Spacing size={6} />
          {closed ? (
            <Caption level="1" style={{ color: '#828282' }}>
              Открытая группа
            </Caption>
          ) : (
            <Caption level="1" style={{ color: '#828282' }}>
              Закрытая группа
            </Caption>
          )}
          <Spacing size={6} />
          <div className={classes.followers}>
            <Caption level="1" style={{ color: '#828282', width: '110px' }}>
              {declOfNum(members_count, followerCase)}
            </Caption>
            {friends && <FriendsBlock friends={friends} />}
          </div>
        </div>
      </SimpleCell>
    </div>
  );
};

export default GroupItem;
