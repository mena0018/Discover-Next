import { Notification } from '@/models';
import { FC, useContext, useState } from 'react';
import { NotificationContext } from '@/context/NotificationContext';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationAlert: FC<Notification> = ({ text, color }) => {
  return (
    <div className={`alert bg-${color}-700 text-white max-w-xs flex items-center justify-center`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='stroke-current shrink-0 h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <span>{text}</span>
    </div>
  );
};

const NotificationWrapper: FC = () => {
  const { addNotificationRef } = useContext(NotificationContext);
  const [notifications, setNotifications] = useState([] as Notification[]);

  addNotificationRef.current = (notification: Notification) => {
    setNotifications((curr) => [...curr, notification]);

    setTimeout(() => {
      setNotifications((curr) => curr.slice(1));
    }, 3000);
  };

  return (
    <div className='absolute top-24 right-4 flex flex-col gap-6 z-10'>
      <AnimatePresence>
        {notifications.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}>
            <NotificationAlert {...item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default NotificationWrapper;
