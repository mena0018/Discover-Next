import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar bg-neutral text-neutral-content'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-ghost normal-case text-xl'>
          Home
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/users' className='btn btn-ghost normal-case text-xl'>
              Users
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </Link>
            <ul className='p-2 bg-neutral z-10'>
              <li>
                <Link href='/users' className='btn btn-ghost normal-case text-xl'>
                  List
                </Link>
              </li>
              <li>
                <Link href='/users/create' className='btn btn-ghost normal-case text-xl'>
                  New
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
