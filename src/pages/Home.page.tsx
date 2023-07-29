import BannerComponent from "../components/Banner.component";
import CategoriesComponent from "../components/Categories.component";
import PopularComponent from "../components/Popular.component";
import SpecialOfferComponent from "../components/SpecialOffer.component";

const HomePage = () => {
  return (
    <div>
      <BannerComponent />
      <SpecialOfferComponent />
      <CategoriesComponent />
      <PopularComponent />
    </div>
  );
};

export default HomePage;
