'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { UserPost } from '@/types/UserType';
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPost>();

  const onSubmit: SubmitHandler<UserPost> = (data) => {
    alert(JSON.stringify(data));
    router.push('/users');
  };

  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300'>
      <div className='card-body'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control'>
            <label className='label' htmlFor='name'>
              <span className='label-text'>Name</span>
            </label>
            <input
              {...register('name', { required: true, pattern: /^[a-z ,.'-]+$/i })}
              id='name'
              placeholder='Enter your name'
              className='input input-bordered'
            />
            {errors.name && errors.name.type === 'required' && (
              <span className='error-msg'>Name is required</span>
            )}
            {errors.name && errors.name.type === 'pattern' && (
              <span className='error-msg'>Character not allowed</span>
            )}
          </div>

          <div className='form-control mt-3'>
            <label className='label' htmlFor='tel'>
              <span className='label-text'>Number</span>
            </label>
            <input
              {...register('tel', { required: true, pattern: /^[0-9 ,.'-]*$/ })}
              type='tel'
              id='tel'
              placeholder='Enter your phone number'
              className='input input-bordered'
            />
            {errors.tel && errors.tel.type === 'required' && (
              <span className='error-msg'>Tel is required</span>
            )}
            {errors.tel && errors.tel.type === 'pattern' && (
              <span className='error-msg'>Character not allowed</span>
            )}
          </div>

          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
