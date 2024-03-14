import { ReactNode } from 'react';
import Messages from '../components/Messages/Messages';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Provider store={store}>
        {children}
        <Messages />
      </Provider>
    </div>
  );
}
