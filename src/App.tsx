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
import { getGroups } from './redux/groups/asyncActions';
import { selectGroups } from './redux/groups/selectors';
import Filters from './components/Filters/Filters';
import Logo from './assets/img/vk_logo.png';

const App = () => {
  const platform = usePlatform();
  const dispatch = useAppDispatch();
  const { result, data } = useSelector(selectGroups);
  console.log(result);
  console.log(data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getGroups());
    }, 1000);
  }, []);

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
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
