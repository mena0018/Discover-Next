'use client';
import { useRouter } from 'next/navigation';

function Form() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, number }),
    });

    router.refresh();
  };

  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300'>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label className='label' htmlFor='name'>
              <span className='label-text'>Name</span>
            </label>
            <input
              id='name'
              type='text'
              name='name'
              placeholder='Enter your name'
              className='input input-bordered'
            />
          </div>

          <div className='form-control mt-3'>
            <label className='label' htmlFor='tel'>
              <span className='label-text'>Number</span>
            </label>
            <input
              type='tel'
              id='tel'
              name='tel'
              placeholder='Enter your phone number'
              className='input input-bordered'
            />
          </div>

          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
