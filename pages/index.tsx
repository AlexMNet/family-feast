import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import { meals1, meals2 } from '@/data';

import RecipeList from '@/components/RecipeList';

export default function Home() {
  return (
    <>
      <Navbar />
      <RecipeList data={meals1} title="The Aguero Family" />
      <RecipeList data={meals2} title="The Maldonados" />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}
