import RootLayout from "@/components/Layouts/RootLayout";
import Banner from '@/components/homePage/Banner';
import Categories from '@/components/homePage/Categories';
import FilteredProduct from "@/components/homePage/FilteredProduct";
import FullMenu from '@/components/homePage/FullMenu';
import OurDishes from "@/components/homePage/OurDishes";
import ReviewsSection from '@/components/homePage/ReviewsSection';
import ScheduleTable from '@/components/homePage/ScheduleTable';
import SurveySection from '@/components/homePage/ServeySection';
import WhyUs from '@/components/homePage/WhyUs';
import Loading from "@/components/shared/Loading";
import { useGetSearchFoodQuery } from "@/features/food/foodApi";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePage = () => {
  const keyword = useSelector((state) => state.filter.searchKeyword);
  const { data: searchedFood, isLoading } = useGetSearchFoodQuery(keyword)
  console.log(searchedFood)
  if (isLoading) {
    return <Loading />
  }
  return (
    keyword ? <FilteredProduct /> : <div>

      <Banner />
      <WhyUs />
      <OurDishes />
      <Categories />
      <FullMenu />
      <ReviewsSection />

      <SurveySection />

      <ScheduleTable />
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

