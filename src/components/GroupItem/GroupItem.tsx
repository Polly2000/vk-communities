import { FC } from 'react';
import { SimpleCell, Avatar, Text, Caption, Spacing } from '@vkontakte/vkui';
import { Group } from '../../redux/groups/types';

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
      : avatar_color === 'purple'
      ? 6
      : 6;

  return (
    <div style={{ marginBottom: '10px' }}>
      <SimpleCell
        // onClick={() => setActivePanel('nothing')}
        expandable="auto"
        before={
          avatar_color !== undefined ? (
            <Avatar size={80} gradientColor={color} />
          ) : (
            <Avatar size={80} style={{ backgroundColor: `${avatar_color}` }} />
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
          <div style={{ display: 'flex', gap: '12px', flexDirection: 'row' }}>
            <Caption level="1" style={{ color: '#828282' }}>
              {members_count} подписчиков
            </Caption>
            <Caption level="1" style={{ color: '#828282' }}>
              Количество друзей:
            </Caption>
          </div>
        </div>
      </SimpleCell>
    </div>
  );
};

export default GroupItem;
