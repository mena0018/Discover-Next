import './globals.css';
import { FC } from 'react';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import NotificationProvider from '@/context/Notification';

export const metadata: Metadata = {
  title: 'Discovering NextJS',
  description: 'Generated by create next app',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en' data-theme='dark' className='overflow-x-hidden'>
      <body>
        <Navbar />
        <NotificationProvider>{children}</NotificationProvider>
      </body>
    </html>
  );
};

export default RootLayout;
