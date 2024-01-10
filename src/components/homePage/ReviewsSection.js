import { useGetFeedBackQuery } from "@/features/reviewratings/reviewApi";
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
import Loading from "../shared/Loading";

const ReviewsSection = () => {
    const { data: reviewList, isLoading: reviewListLoading, isError: reviewListIsError } = useGetFeedBackQuery();
    console.log(reviewList)

    let content = ""

    if (reviewListLoading) {
        return <Loading />
    }
    if (!reviewListLoading && !reviewListIsError && reviewList.data.length === 0) {
        content = <p className=' text-4xl text-primary text-center'>There Have No any Reviews</p>
    }
    if (!reviewListLoading && !reviewListIsError && reviewList.data.length > 0) {
        content = <div className="pt-20">
            <Swiper
                modules={[Navigation]}
                spaceBetween={80}
                slidesPerView={3}
                navigation
            >
                {
                    reviewList.data.map((rev) => {
                        return <SwiperSlide key={rev.id}>
                            <div className="space-y-2  shadow text-center">
                                <Image src={user} className="w-20 mx-auto" alt="user" />
                                <h1 className="text-2xl font-semibold uppercase">{rev.userName}</h1>
                                <ProductRatings ratings={5} />
                                <p> <span className="text-red-500 text-7xl"> <FontAwesomeIcon icon={faQuoteLeft} /> </span> The {rev.food.foodTitle} is {rev.reviewText}</p>
                            </div>
                        </SwiperSlide>
                    })
                }




            </Swiper>
        </div>
    }
    return (
        <div className="container mx-auto mt-20 space-y-2 " id="feedBackSection">
            <div className="text-center">
                <h1 className="text-7xl font-bold">Food Lovers Feedback</h1>
                <p >High quality ingredients: Fresh, seasonal, and locally sourced ingredients <br /> often make a big difference in taste and overall enjoyment of a dish</p>
            </div>

            {content}


        </div >
    );
};

export default ReviewsSection;