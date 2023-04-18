import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { SiFacebook, SiTwitter, SiPinterest } from 'react-icons/si';
import { SlHeart } from 'react-icons/sl';
import { FcGoogle } from 'react-icons/fc';
import { TbMail } from 'react-icons/tb';
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid';

const stats = [
  { id: 1, name: 'Prep Time', value: '10 min' },
  { id: 2, name: 'Cook Time', value: '30 min' },
  { id: 3, name: 'Total Time', value: '40 min' },
  { id: 4, name: 'Servings', value: '4' },
];

export default function Recipe() {
  const router = useRouter();

  const { recipe_id } = router.query;
  return (
    <Layout>
      <section className="container mx-auto">
        <div className="flex flex-col w-full justify-center gap-4 max-w-screen-lg mx-auto">
          {/* image and social sharing icons */}
          <div className="">
            <div className="h-96">
              <img
                src="https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
                alt="food"
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-4 mt-4 items-center px-2 md:px-0">
              <p>share: </p>
              <a href="https://www.linkedin.com/in/alexmnet/" target="_blank">
                <SiTwitter className="w-5 h-5 text-[#00acee] hover:brightness-125" />
              </a>
              <a href="https://github.com/AlexMNet" target="_blank">
                <SiFacebook className="w-5 h-5 text-[#3b5998] hover:brightness-125" />
              </a>
              <a href="https://github.com/AlexMNet" target="_blank">
                <SiPinterest className="w-5 h-5 text-[#bd081c] hover:brightness-125" />
              </a>
              <a href="https://github.com/AlexMNet" target="_blank">
                <TbMail className="w-5 h-5 text-gray-400 hover:brightness-125" />
              </a>
            </div>
          </div>
          {/* Recipe */}
          <div className="px-2 md:px-0">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Spicy BBQ Wings
            </h1>
            {/* Heart and stars */}
            <div className="flex items-center mb-4 space-x-4">
              <div className="flex">
                <HeartIcon className="w-5 h-5 stroke-red-500 fill-transparent stroke-2 hover:fill-red-500 cursor-pointer" />
              </div>
              <div className="flex">
                <StarIcon className="w-5 h-5 fill-transparent stroke-2 stroke-yellow-500 hover:fill-yellow-500" />
                <StarIcon className="w-5 h-5 fill-transparent stroke-2 stroke-yellow-500 hover:fill-yellow-500" />
                <StarIcon className="w-5 h-5 fill-transparent stroke-2 stroke-yellow-500 hover:fill-yellow-500" />
                <StarIcon className="w-5 h-5 fill-transparent stroke-2 stroke-yellow-500 hover:fill-yellow-500" />
                <StarIcon className="w-5 h-5 fill-transparent stroke-2 stroke-yellow-500 hover:fill-yellow-500" />
              </div>
            </div>
            {/* Description */}
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Spicy BBQ wings are a popular dish that typically consists of
              chicken wings coated in a spicy and tangy barbecue sauce. The
              sauce can vary in its level of spiciness, depending on the recipe,
              but it usually contains ingredients such as chili powder, cayenne
              pepper, hot sauce, and brown sugar.
            </p>
            {/* Stats */}
            <dl className="mt-10 grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-neutral-900 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            {/* Ingredients */}
            <div className="mt-8">
              <h2 className="text-4xl font-bold dark:text-white">
                Ingredients
              </h2>
              <ul className="mt-3 text-xl space-y-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-400">
                <li className="flex space-x-3 items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>1b Chicken Wings</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>250ml BBQ Sauce</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>2tbs white vinegar</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>1 tsp brown sugar</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>2 tbs hot sauce</span>
                </li>
              </ul>
            </div>
            {/* Directions */}
            <div className="mt-8">
              <h3 className="text-3xl font-bold dark:text-white mb-6">
                Directions
              </h3>
              {/* Direction */}
              <div className="my-6">
                <h5 className="text-xl font-bold dark:text-white mb-1">
                  Step 1
                </h5>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  omnis facere sint incidunt debitis id!
                </p>
                <div className="aspect-square w-full md:w-96 bg-red-500 my-2">
                  <img
                    src="https://www.allrecipes.com/thmb/PZ7cYxsx_nO_fpesiEW6LLyovo4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/231939-honey-glazed-chicken-ddmfs-step2-0046-4x3-3429a21950084260a5639ca480f73e8b.jpg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="my-6">
                <h5 className="text-xl font-bold dark:text-white mb-1">
                  Step 2
                </h5>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  omnis facere sint incidunt debitis id!
                </p>
                <div className="aspect-square w-full md:w-96 bg-red-500 my-2">
                  <img
                    src="https://www.allrecipes.com/thmb/NDwdN3b5OgWyBymGZRyAjs7FTg4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/231939-honey-glazed-chicken-ddmfs-step4-0047-4x3-ed0296eff2084657b7378158cff28530.jpg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="my-6">
                <h5 className="text-xl font-bold dark:text-white mb-1">
                  Step 3
                </h5>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  omnis facere sint incidunt debitis id!
                </p>
                <div className="aspect-square w-full md:w-96 bg-red-500 my-2">
                  <img
                    src="https://www.allrecipes.com/thmb/faoOj3DjJp4qpp7ngB34QyYuTuw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/231939-honey-glazed-chicken-ddmfs-step1-0043-4x3-3cb9fdb5979242038d35074d33e3e741.jpg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="my-6">
                <h5 className="text-xl font-bold dark:text-white mb-1">
                  Step 4
                </h5>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  omnis facere sint incidunt debitis id!
                </p>
                <div className="aspect-square w-full md:w-96 bg-red-500 my-2">
                  <img
                    src="https://www.allrecipes.com/thmb/AhQLcq-BHeoRO4EGdnw941Z_w0A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/231939_Honey-Glazed-Chicken_Adam-Vaccarezza_4564886_original-4x3-1-acb1de801b6541b69e06bf7b731c1b60.jpg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ring-1 ring-slate-400 text-slate-400 px-2 py-1 rounded-md"
            >
              Back to top
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
