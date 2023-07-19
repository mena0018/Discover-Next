'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Post } from '@/models';
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>();

  const onSubmit: SubmitHandler<Post> = (data) => {
    alert(JSON.stringify(data));
    router.push('/posts');
  };

  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300'>
      <div className='card-body'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control'>
            <label className='label' htmlFor='title'>
              <span className='label-text'>Title</span>
            </label>
            <input
              {...register('title', { required: true, pattern: /^[a-z ,.'-]+$/i })}
              id='title'
              placeholder='Enter your title'
              className='input input-bordered'
            />
            {errors.title && errors.title.type === 'required' && (
              <span className='error-msg'>Title is required</span>
            )}
            {errors.title && errors.title.type === 'pattern' && (
              <span className='error-msg'>Character not allowed</span>
            )}
          </div>

          <div className='form-control mt-3'>
            <label className='label' htmlFor='userId'>
              <span className='label-text'>userID</span>
            </label>
            <input
              {...register('userId', { required: true, pattern: /^[0-9 ,.'-]*$/ })}
              type='number'
              id='userId'
              placeholder='Enter the user id'
              className='input input-bordered'
            />
            {errors.userId && errors.userId.type === 'required' && (
              <span className='error-msg'>userID is required</span>
            )}
            {errors.userId && errors.userId.type === 'pattern' && (
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
