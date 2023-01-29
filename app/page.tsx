import Image from 'next/image';
import Gif from 'public/welcome.gif';

export default function Home() {
  return (
    <main className='flex items-center justify-center mt-20 px-5 md:px-0'>
      <Image src={Gif} alt='my gif' className='rounded-lg' />
    </main>
  );
}
