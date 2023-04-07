import { useState, useCallback } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

export default function Home() {
  const [form, setForm] = useState('login');

  const toggleForm = useCallback(() => {
    setForm((current) => (current === 'login' ? 'register' : 'login'));
  }, []);

  return (
    <main className="h-full w-full relative bg-no-repeat bg-center bg-fixed bg-cover bg-feast">
      <div className="bg-black h-full w-full lg:bg-opacity-60">
        <nav className="px-12 py-6">
          <div className="text-3xl lg:text-4xl font-bold text-white">
            Family Feast <span className="text-[#E00000]">DB ♨️</span>
          </div>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 w-full lg:max-w-md mt-32 rounded-md text-center">
            <h2 className="text-slate-200 font-bold text-4xl mb-8">
              {form === 'login' ? 'Login' : 'Sign Up'}
            </h2>
            <div className="flex gap-4 mb-6 justify-center">
              <div className="flex justify-center items-center bg-white w-10 h-10 rounded-full hover:cursor-pointer">
                <FcGoogle size={30} />
              </div>
              <div className="flex justify-center items-center bg-white w-10 h-10 rounded-full hover:cursor-pointer">
                <FaGithub size={30} className="text-black" />
              </div>
              <div className="flex justify-center items-center bg-white w-10 h-10 rounded-full hover:cursor-pointer">
                <BsFacebook size={30} className="text-blue-500" />
              </div>
            </div>
            <p className="text-neutral-500">
              {form === 'login' ? 'First time?' : 'Already have an account?'}
              <span
                onClick={toggleForm}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {form === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
