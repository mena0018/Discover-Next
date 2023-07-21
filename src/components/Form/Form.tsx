'use client';

import { FC } from 'react';
import { Post } from '@/models';
import { addPost } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import Field from './Field';

const Form: FC = () => {
  const router = useRouter();
  const { handleSubmit,register, formState: { errors }} = useForm<Post>(); // prettier-ignore

  const onSubmit: SubmitHandler<Post> = (data) => {
    addPost(data).then(() => router.push('/posts'));
  };

  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300'>
      <div className='card-body'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field property='userId' isNumberField errors={errors} register={register} />
          <Field property='title' errors={errors} register={register} />
          <Field property='body' errors={errors} register={register} />

          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
