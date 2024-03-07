import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { store } from './redux/store';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AdaptivityProvider>
  </ConfigProvider>,
);
