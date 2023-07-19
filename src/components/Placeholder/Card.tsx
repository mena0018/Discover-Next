import { FC } from 'react';
import Image from 'next/image';
import Placeholder from '/public/placeholder.svg';

const Card: FC = () => {
  return (
    <section className='mt-10 w-full max-w-sm mx-auto flex flex-col items-center justify-center gap-6 px-3 md:p-0'>
      <div className='bg-gray-600 card shadow-xl animate-pulse min-w-[400px] min-h-[300px]'>
        <figure className='w-full h-full  flex items-center justify-center p-4'>
          <Image src={Placeholder} alt='Placeholder' className='w-40 h-40' />
        </figure>

        <div className='card-body'>
          <h2 className='card-title'>
            <div className='w-full h-2 rounded-md bg-gray-400' />
            <div className='badge badge-secondary'>NEW</div>
          </h2>

          <div className='w-full h-2 rounded-md bg-gray-400' />

          <div className='card-actions justify-end mt-4'>
            <div className='w-20 h-2 rounded-md bg-gray-400' />
            <div className='w-20 h-2 rounded-md bg-gray-400' />
          </div>
        </div>
      </div>

      <div className='btn btn-primary btn-wide animate-pulse'>
        <div className='w-full h-2 rounded-md bg-gray-400' />
      </div>
    </section>
  );
};

export default Card;
