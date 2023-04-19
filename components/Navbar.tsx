import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="w-full px-2 py-6 text-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white lg:text-4xl">
          <Link href="/">
            Family Feast <span className="text-[#E00000]">DB ♨️</span>
          </Link>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="inline-flex w-full items-center justify-center gap-x-3 rounded-full px-2 py-1 text-sm font-semibold text-gray-400 ring-1 ring-slate-400">
                  <img
                    className="w-8 h-auto rounded-full"
                    src={session?.user?.image || ''}
                    alt="Maria"
                  />
                  <span className="font-medium truncate max-w-[7.5rem]">
                    {session?.user?.name && session.user.name.split(' ')[0]}
                  </span>

                  <ChevronDownIcon
                    className={`-mr-1 h-5 w-5 transition ${
                      open && 'rotate-180'
                    }`}
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Add Recipe
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-300',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                          onClick={() => signOut()}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
