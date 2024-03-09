import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  usePlatform,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { useAppDispatch } from './redux/store';
import { getGroups, getGroupsWithFriends } from './redux/groups/asyncActions';
import { selectGroups } from './redux/groups/selectors';
import { selectFilter } from './redux/filter/selectors';
import Filters from './components/Filters/Filters';
import GroupItem from './components/GroupItem/GroupItem';
import Logo from './assets/img/vk_logo.png';

const App = () => {
  const platform = usePlatform();
  const dispatch = useAppDispatch();
  const { filterValue, friends, avatarColor } = useSelector(selectFilter);
  const { result, data } = useSelector(selectGroups);
  console.log(result);
  console.log(data);
  console.log('filter value: ' + filterValue);
  console.log('friends: ' + friends);
  console.log('ava: ' + avatarColor);

  useEffect(() => {
    if (friends === true) {
      setTimeout(() => {
        dispatch(getGroupsWithFriends({ avatarColor }));
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(getGroups({ filterValue, avatarColor }));
      }, 1000);
    }
  }, [friends, filterValue, avatarColor]);

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main" style={{ margin: '0 auto', width: '60%' }}>
              <PanelHeader>
                <img src={Logo} alt="Logo" />
              </PanelHeader>
              <Group header={<Header mode="secondary">Сообщества</Header>}>
                <Filters />
                <div style={{ marginTop: '20px' }}>
                  {data?.map((item: any) => {
                    return <GroupItem key={item.id} {...item} />;
                  })}
                </div>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
