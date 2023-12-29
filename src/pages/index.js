import RootLayout from "@/components/Layouts/RootLayout";
import Banner from '@/components/homePage/Banner';
import Categories from '@/components/homePage/Categories';
import FullMenu from '@/components/homePage/FullMenu';
import ReviewsSection from '@/components/homePage/ReviewsSection';
import ScheduleTable from '@/components/homePage/ScheduleTable';
import SurveySection from '@/components/homePage/ServeySection';
import WhyUs from '@/components/homePage/WhyUs';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePage = () => {
  return (
    <div>

      <Banner />
      <WhyUs />
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

