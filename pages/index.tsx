import { NextPageContext } from 'next';
import { signOut, getSession } from 'next-auth/react';

import useCurrentUser from '@/hooks/useCurrentUser';

export default function Home() {
  const { data: user } = useCurrentUser();
  if (user) {
    console.log(user);
  }

  return (
    <main className="h-full w-full flex flex-col justify-center items-center bg-black text-white">
      <div className="mt-8 max-w-xl flex flex-col p-8 rounded-md border justify-center items-center">
        <div className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Family Feast <span className="text-[#E00000]">DB ♨️</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user?.image}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-6"
        />
        <div className="mb-4 text-center">
          <h3 className="text-2xl font-bold mb-1">{user?.name}</h3>
          <p className="font-thin">{user?.email}</p>
        </div>
        <button
          onClick={() => signOut()}
          className="block bg-purple-500 rounded-lg px-4 py-2 hover:bg-opacity-90"
        >
          Sign out
        </button>
      </div>
    </main>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
