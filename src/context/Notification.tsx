'use client';

import { Notification } from '@/models';
import { createContext, FC, PropsWithChildren, useRef } from 'react';
import NotificationWrapper from '@/components/Notification';

type Context = {
  addNotificationRef: { current: (notification: Notification) => void };
};

export const NotificationContext = createContext<Context>({
  addNotificationRef: { current: (notification: Notification) => {} },
});

const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const addNotificationRef = useRef((notification: Notification) => {});

  return (
    <NotificationContext.Provider value={{ addNotificationRef }}>
      <NotificationWrapper />
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
