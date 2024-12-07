import BestSelling from "@/components/best-selling";
import BrowseCategories from "@/components/catogeries";
import ExploreProducts from "@/components/explore-products";
import HeroSection from "@/components/hero-section";
import MusicPromo from "@/components/music-promo";
import NewArrivals from "@/components/new-arrivals";
import ServiceFeatures from "@/components/service-features";
import TodayFlashSales from "@/components/todays-flash-sale";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <TodayFlashSales/>
    <hr className="bg-black"/>
    <BrowseCategories/>
    <hr className="bg-black"/>
    <BestSelling/>
    <hr className="bg-black"/>  
    <MusicPromo/>
    <ExploreProducts/>
    <NewArrivals/>
    <ServiceFeatures/>
   </div>
  );
}
