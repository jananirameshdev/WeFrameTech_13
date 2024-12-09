import Footer from "@/Components/Footer";
import Sinscrire from "@/Components/Sinscrire";
import Services from "@/Components/Services";
import Products from "@/Components/Products";
import ProductCarousel from "@/Components/ProductCarousel";
import NavigationBar from "@/Components/NavigationBar";
import ProductInfo from "@/Components/ProductInfo";
import ProductDescription from "@/Components/ProductDescription";
export default function Home() {

  return (
    <div className="App">
      <NavigationBar />
      <ProductInfo />
      <ProductDescription />
      <ProductCarousel />
      <Products />
      <Services />
      <Sinscrire />
      <Footer />
    </div>
  );
}
