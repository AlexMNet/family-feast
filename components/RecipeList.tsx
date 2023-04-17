import React from 'react';
import RecipeCard from './RecipeCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface RecipeListProps {
  data: {
    id: number;
    foodImg: string;
    title: string;
    userName: string;
    userImg: string;
    tagImages: string[];
  }[];
  title: string;
}

const RecipeList: React.FC<RecipeListProps> = ({ data, title }) => {
  return (
    <section className="container mx-auto flex w-full flex-col px-2 py-10">
      <h2 className="text-xl md:text-3xl text-white mb-4">{title}</h2>
      <div className="scrollbar-hide flex gap-2 overflow-x-scroll snap-mandatory snap-x">
        <Swiper
          slidesPerView={1.2}
          centeredSlidesBounds={true}
          spaceBetween={10}
          navigation={{ enabled: false }}
          breakpoints={{
            769: {
              slidesPerView: 2.1,
              navigation: {
                enabled: true,
              },
            },
            1024: {
              slidesPerView: 4.1,
              navigation: { enabled: true },
            },
          }}
          modules={[Keyboard, FreeMode, Navigation, Pagination]}
          className="mySwiper w-full"
        >
          {data.map((meal) => (
            <SwiperSlide key={meal.id} className="flex flex-col snap-start">
              <RecipeCard data={meal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecipeList;
