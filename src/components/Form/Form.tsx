'use client';

import { FC } from 'react';
import { Post, zPost } from '@/models';
import { addPost } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNotification } from '@/hooks/useNotification';
import Field from './Field';

const Form: FC = () => {
  const router = useRouter();
  const { addNotification } = useNotification();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Post>({
    resolver: zodResolver(zPost),
  });

  const onSubmit: SubmitHandler<Post> = (data) => {
    addPost(data).then(() => {
      addNotification({ text: 'Post created with success', color: 'green' });
      router.push('/posts');
    });
  };

  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300'>
      <div className='card-body'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field property='userId' errors={errors} register={register} isNumberField />
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
