import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import HeroSection from "@/components/modules/home/HeroSection";
import CategorySection from "@/components/modules/home/HeroSection/Category";

const HomePage = async () => {
    return (
      <div>
        <HeroSection></HeroSection>
        <CategorySection></CategorySection>
        <FeaturedProducts></FeaturedProducts>
      </div>
    );
  };
  
  export default HomePage;