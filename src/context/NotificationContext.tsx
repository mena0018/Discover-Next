'use client';

import { Notification, NotificationRef } from '@/models';
import { createContext, FC, PropsWithChildren, useRef } from 'react';
import NotificationWrapper from '@/components/Notification';

const addNotification = (notification: Notification) => {};

export const NotificationContext = createContext<NotificationRef>({
  addNotificationRef: { current: addNotification },
});

const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const addNotificationRef = useRef(addNotification);

  return (
    <NotificationContext.Provider value={{ addNotificationRef }}>
      <NotificationWrapper />
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
