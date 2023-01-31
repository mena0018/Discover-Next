import Image from 'next/image';
import Placeholder from '/public/placeholder.svg';

export default function PlaceHolder() {
  return (
    <div className='bg-gray-500 animate-pulse w-full h-full min-h-[288px] flex items-center justify-center'>
      <Image src={Placeholder} alt='Placeholder' className='max-h-72 h-12 text-gray-200' />
    </div>
  );
}
