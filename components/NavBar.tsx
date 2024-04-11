import { auth, signOut } from '@/auth';
import Link from 'next/link';

const NavBar = async () => {
  const session = await auth();
  const user = session?.user;

  const logoutAction = async () => {
    'use server';
    await signOut();
  };

  return (
    <header className='bg-white h-16 border border-black'>
      <nav className='h-full flex justify-between container items-center'>
        <ul className='flex items-center space-x-4'>
          <li>
            <Link href='/' className='text-ct-dark-600'>
              Home
            </Link>
          </li>
          {!user && (
            <>
              <li>
                <Link href='/signup' className='text-ct-dark-600'>
                  Signup
                </Link>
              </li>
              <li>
                <Link href='/signin' className='text-ct-dark-600'>
                  Signin
                </Link>
              </li>
            </>
          )}
          {user && (
            <form action={logoutAction} className='flex'>
              <li className='ml-4'>
                <Link href='/profile' className='text-ct-dark-600'>
                  Profile
                </Link>
              </li>
              <li className='ml-4'>
                <button>Logout</button>
              </li>
            </form>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
