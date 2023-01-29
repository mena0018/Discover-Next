import '/src/styles/globals.css';
import { PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className='h-screen'>
      <body className='h-screen'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
