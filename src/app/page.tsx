import { FC } from 'react';
import Image from 'next/image';
import Gif from 'public/welcome.gif';

const Home: FC = () => {
  return (
    <main className='w-full h-full flex items-center justify-center mt-20 px-5 md:px-0'>
      <Image src={Gif} alt='my gif' className='rounded-lg' priority={true} />
    </main>
  );
};

export default Home;
