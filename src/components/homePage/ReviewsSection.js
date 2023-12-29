import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import user from "../../assets/img/avatar.png";
import ProductRatings from "../productRatings";

const ReviewsSection = () => {
    return (
        <div className="container mx-auto mt-20 space-y-2 ">
            <div className="text-center">
                <h1 className="text-7xl font-bold">Food Lovers Feedback</h1>
                <p >High quality ingredients: Fresh, seasonal, and locally sourced ingredients <br /> often make a big difference in taste and overall enjoyment of a dish</p>
            </div>
            <div className="pt-20">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={80}
                    slidesPerView={3}
                    navigation
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="space-y-2  shadow text-center">
                            <Image src={user} className="w-20 mx-auto" alt="user" />
                            <h1 className="text-2xl font-semibold">Bilal</h1>
                            <ProductRatings ratings={5} />
                            <p> <span className="text-red-500 text-7xl"> <FontAwesomeIcon icon={faQuoteLeft} /> </span> The sauce is a key component of pizza and people evaluate it based on its flavour, consistency, and seasoning.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="space-y-2  shadow text-center">
                            <Image src={user} className="w-20 mx-auto" alt="user" />
                            <h1 className="text-2xl font-semibold">Bilal</h1>
                            <ProductRatings ratings={5} />
                            <p> <span className="text-red-500 text-7xl"> <FontAwesomeIcon icon={faQuoteLeft} /> </span> The sauce is a key component of pizza and people evaluate it based on its flavour, consistency, and seasoning.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="space-y-2  shadow text-center">
                            <Image src={user} className="w-20 mx-auto" alt="user" />
                            <h1 className="text-2xl font-semibold">Bilal</h1>
                            <ProductRatings ratings={5} />
                            <p> <span className="text-red-500 text-7xl"> <FontAwesomeIcon icon={faQuoteLeft} /> </span> The sauce is a key component of pizza and people evaluate it based on its flavour, consistency, and seasoning.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="space-y-2  shadow">
                            <Image src={user} className="w-20 mx-auto" alt="user" />
                            <h1 className="text-2xl font-semibold">Bilal</h1>
                            <ProductRatings ratings={5} />
                            <p> <span className="text-red-500 text-7xl"> <FontAwesomeIcon icon={faQuoteLeft} /> </span> The sauce is a key component of pizza and people evaluate it based on its flavour, consistency, and seasoning.</p>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>



            {/* <div className="grid grid-cols-3 gap-10 pt-20 ">
                <div className="space-y-2  shadow">
                    <Image src={user} className="w-20 mx-auto" alt="user" />
                    <h1 className="text-2xl font-semibold">Bilal</h1>
                    <ProductRatings ratings={5} />
                    <p> <span className="text-red-500 text-7xl"> <FontAwesomeIcon icon={faQuoteLeft} /> </span> The sauce is a key component of pizza and people evaluate it based on its flavour, consistency, and seasoning.</p>
                </div>
                <div className="space-y-2  shadow">
                    <Image src={user} className="w-20 mx-auto" alt="user" />
                    <h1 className="text-2xl font-semibold">Bilal</h1>
                    <ProductRatings ratings={5} />
                    <p> <span className="text-red-500 text-7xl"> <FontAwesomeIcon icon={faQuoteLeft} /> </span> The sauce is a key component of pizza and people evaluate it based on its flavour, consistency, and seasoning.</p>
                </div>
                <div className="space-y-2  shadow">
                    <Image src={user} className="w-20 mx-auto" alt="user" />
                    <h1 className="text-2xl font-semibold">Bilal</h1>
                    <ProductRatings ratings={5} />
                    <p> <span className="text-red-500 text-7xl"> <FontAwesomeIcon icon={faQuoteLeft} /> </span> The sauce is a key component of pizza and people evaluate it based on its flavour, consistency, and seasoning.</p>
                </div>
            </div> */}

        </div >
    );
};

export default ReviewsSection;