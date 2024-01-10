/* eslint-disable @next/next/no-img-element */
import { useGetAllCategoryQuery, useGetCategoryByNameQuery } from "@/features/category/categoryApi";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "../shared/Loading";

const Categories = () => {
    let content = null;
    let foodContent = null;
    const { data: categories, isError, isLoading, error } = useGetAllCategoryQuery();
    const [chooseCategory, setChooseCategory] = useState(null);
    useEffect(() => {
        if (categories && categories.data && categories.data.length > 0) {
            setChooseCategory(categories.data[0].category);
        }
    }, [categories]);

    const { data: foods, isLoading: foodLoading, isError: isFoodError, error: foodError } = useGetCategoryByNameQuery(chooseCategory)

    if (isLoading || foodLoading) {
        return <Loading />
    }

    // console.log(chooseCategory)
    if (!isLoading && isError) {
        content = <p className='text-red-500 font-semibold'>{error?.data?.message}</p>
    }
    if (!isLoading && !isError && categories?.data?.length === 0) {
        content = <p className='text-red-500 font-semibold'>There have no Categories</p>
    }
    if (!isLoading && !isError && categories?.data?.length > 0) {
        content = categories.data.map((category) => (
            <div onClick={() => setChooseCategory(category.category)} key={category.id} className={chooseCategory === category.category ? 'flex  items-center bg-primary py-2 px-3 rounded-3xl mr-3 cursor-pointer' : 'flex  items-center py-2 px-3 mr-3 cursor-pointer'}>
                <img src={category.image} alt='' className='w-16 h-16' />
                <h1 className='text-2xl pl-4 font-bold'>{category.category}</h1>
            </div>
        ))
    }

    //Food section 
    if (!foodLoading && isFoodError) {
        foodContent = <p className='text-red-500 font-semibold'>{error?.data?.message}</p>
    }
    if (!foodLoading && !isFoodError && foods?.data?.length === 0) {
        foodContent = <p className='text-red-500 font-semibold'>There have no Categories</p>
    }
    if (!foodLoading && !isFoodError && foods?.data?.length > 0) {
        foodContent = foods.data.map((food) => (
            <SwiperSlide key={food.id}>
                <div
                    className="bg-no-repeat relative h-[450px] flex flex-col justify-end"
                    style={{
                        backgroundImage: `url(${food.image})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-65"></div>
                    <div className="relative flex flex-col justify-end py-20 px-5 text-white flex-grow">
                        <a href={`/food/${food._id}`} className="text-5xl text-white">{food.foodTitle}</a>
                        <h1 className="text-7xl text-white">${food.price}</h1>
                    </div>
                </div>
            </SwiperSlide>
        ))
    }





    return (
        <div className='container mx-auto mt-14' id="categorySection">
            <div className="text-center space-y-3">
                <h1 className='text-7xl text-center font-bold mt-9'>Food Categories</h1>
                <p className='text-xl'>Indulge in the exquisite flavors of our collection <br /> where each dish is a symphony of taste and innovation.</p>

            </div>

            <div className='grid grid-cols-12 mt-10'>
                <div className='col-span-2 border-l-transparent space-y-5 border-t-transparent border-b-transparent  border border-r-[#F3F3F3] border-r-4'>


                    {/* <div className='flex  items-center bg-primary py-2 px-3 rounded-3xl mr-3   '>
                        <Image src={rice} alt='' className='w-16 bg-white rounded-full ' ></Image>
                        <h1 className='text-2xl pl-4 font-bold text-white'>Burger</h1>
                    </div> */}


                    {content}
                </div>


                <div className='col-span-10 ml-4'>
                    <div className=''>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={2}
                            navigation
                        >
                            {foodContent}


                        </Swiper>






                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;