import { useContext } from 'react';
import { Notification } from '@/models';
import { NotificationContext } from '@/context/Notification';

export function useNotification() {
  const { addNotificationRef } = useContext(NotificationContext);

  const addNotification = (notification: Notification) => {
    addNotificationRef.current(notification);
  };

  return { addNotification };
}
