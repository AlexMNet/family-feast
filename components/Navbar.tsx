import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="w-full px-2 py-6 text-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white lg:text-4xl">
          Family Feast <span className="text-[#E00000]">DB ♨️</span>
        </div>
        <div className="cursor-pointer">
          <img
            className="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
            src={session?.user?.image || ''}
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
