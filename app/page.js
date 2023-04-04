// import { Navbar, Footer, Header } from "../component"
import Navbar from "@/component/Navbar";
import { Header } from "@/component/Header";
import Trending from "@/component/Trending";
import Creator from "@/component/Creator";
import Category from "@/component/Category";
import Discover from "@/component/Discover";
import Highlight from "@/component/Highlight";
import Work from "@/component/Work";
import Newsletter from "@/component/Newsletter";
import { Footer } from "@/component";


const page = () => {
  return (
    <div className="bg-[#2B2B2B] overflow-hidden">
      <Navbar/>
      <Header/>
      <Trending />
      <Creator />
      <Category />
      <Discover />
      <Highlight />
      <Work />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default page;