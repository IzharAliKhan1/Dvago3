import Image from "next/image";
import Slides from './users/slides/page'
import Categories from "./users/categories/Categories";
import HomeSaleContainer from "./users/home-sale-container/homeSaleContainer";
import HomeMarketingdiv from "./users/homeMarketingdiv/HomeMarketingdiv";
import TopSellingItems from "./users/TopSellingItems/page";

export default function Home() {
  return (
   <div>
    <Slides />
    <Categories />
    <HomeSaleContainer />
    <HomeMarketingdiv />
    <TopSellingItems />
   </div>
  );
}
