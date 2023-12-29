import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import rice from '../../assets/img/r2.png';

const Categories = () => {
    return (
        <div className='container mx-auto mt-14'>
            <h1 className='text-5xl  font-bold'>Menu that makes <br /> You eat Unstopable</h1>
            <div className='grid grid-cols-12 mt-10'>
                <div className='col-span-2 border-l-transparent space-y-5 border-t-transparent border-b-transparent  border border-r-[#F3F3F3] border-r-4'>
                    <div className='flex  items-center py-2 px-3 mr-3  '>
                        <Image src={rice} alt='' className='w-16' ></Image>
                        <h1 className='text-2xl pl-4 font-bold'>Burger</h1>
                    </div>
                    <div className='flex  items-center bg-primary py-2 px-3 rounded-3xl mr-3   '>
                        <Image src={rice} alt='' className='w-16 bg-white rounded-full ' ></Image>
                        <h1 className='text-2xl pl-4 font-bold text-white'>Burger</h1>
                    </div>
                    <div className='flex  items-center py-2 px-3 mr-3  '>
                        <Image src={rice} alt='' className='w-16' ></Image>
                        <h1 className='text-2xl pl-4 font-bold'>Burger</h1>
                    </div><div className='flex  items-center py-2 px-3 mr-3  '>
                        <Image src={rice} alt='' className='w-16' ></Image>
                        <h1 className='text-2xl pl-4 font-bold'>Burger</h1>
                    </div><div className='flex  items-center py-2 px-3 mr-3  '>
                        <Image src={rice} alt='' className='w-16' ></Image>
                        <h1 className='text-2xl pl-4 font-bold'>Burger</h1>
                    </div>
                </div>


                <div className='col-span-10 ml-4'>
                    <div className=''>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={2}
                            navigation
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div
                                    className="bg-no-repeat relative h-[450px] flex flex-col justify-end"
                                    style={{
                                        backgroundImage: `url('/c1.png')`,
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-65"></div>
                                    <div className="relative flex flex-col justify-end py-20 px-5 text-white flex-grow">
                                        <h1 className="text-5xl text-white">Spanish Dish</h1>
                                        <h1 className="text-7xl text-white">$10.00</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="bg-no-repeat relative h-[450px] flex flex-col justify-end"
                                    style={{
                                        backgroundImage: `url('/c1.png')`,
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-65"></div>
                                    <div className="relative flex flex-col justify-end py-20 px-5 text-white flex-grow">
                                        <h1 className="text-5xl text-white">Spanish Dish</h1>
                                        <h1 className="text-7xl text-white">$10.00</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="bg-no-repeat relative h-[450px] flex flex-col justify-end"
                                    style={{
                                        backgroundImage: `url('/c1.png')`,
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-65"></div>
                                    <div className="relative flex flex-col justify-end py-20 px-5 text-white flex-grow">
                                        <h1 className="text-5xl text-white">Spanish Dish</h1>
                                        <h1 className="text-7xl text-white">$10.00</h1>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>






                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;