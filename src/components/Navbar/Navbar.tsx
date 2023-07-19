import { FC } from 'react';
import Link from 'next/link';
import LinkItem from './LinkItem';

const Navbar: FC = () => {
  return (
    <nav className='navbar bg-neutral text-neutral-content'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-ghost normal-case text-xl'>
          Home
        </Link>
      </div>

      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <LinkItem name='User' route='/users' />
          <LinkItem name='Post' route='/posts' isPost />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
