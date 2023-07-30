import BannerComponent from "../components/home/Banner.component";
import CategoriesComponent from "../components/shop/Categories.component";
import PopularComponent from "../components/home/Popular.component";
import SpecialOfferComponent from "../components/home/SpecialOffer.component";

const HomePage = () => {
  return (
    <div>
      <BannerComponent />
      <CategoriesComponent />
      <SpecialOfferComponent />
      <PopularComponent />
    </div>
  );
};

export default HomePage;
