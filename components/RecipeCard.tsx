import React from 'react';

interface RecipeCardProps {
  data: {
    id: number;
    foodImg: string;
    title: string;
    userName: string;
    userImg: string;
    tagImages: string[];
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ data }) => {
  return (
    <div className="cursor-pointer ">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          src={data.foodImg}
          alt="food"
          draggable={false}
        />
        <div className="absolute bottom-0 left-0 right-0 z-50 w-100 bg-black bg-opacity-70 px-2 py-4 font-bold leading-6 text-white flex flex-col">
          <h4>{data.title}</h4>
        </div>
      </div>
      <div className="px-2">
        <div className="my-2 flex gap-2">
          {data.tagImages.map((tag) => (
            <div key={tag} className="h-6 w-6 rounded-full">
              <img className="h-full w-full" src={tag} alt="Food Icons" />
            </div>
          ))}
        </div>
        <p className="mb-2 text-sm font-thin text-white">
          Estimated prep time: 20min
        </p>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 rounded-full flex items-center justify-center">
            <img
              className="my-1 inline-block rounded-full w-9 h-9"
              src={data.userImg}
              alt="User"
            />
          </div>
          <p className="text-sm text-white">by {data.userName}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
