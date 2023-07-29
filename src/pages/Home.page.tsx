import BannerComponent from "../components/Banner.component";
import CategoriesComponent from "../components/Categories.component";
import FooterComponent from "../components/Footer.component";
import PopularComponent from "../components/Popular.component";
import SpecialOfferComponent from "../components/SpecialOffer.component";

const HomePage = () => {
  return (
    <div>
      <BannerComponent />
      <SpecialOfferComponent />
      <CategoriesComponent />
      <PopularComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
