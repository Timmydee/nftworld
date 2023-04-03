// import { Navbar, Footer, Header } from "../component"
import Navbar from "@/component/Navbar";
import { Header } from "@/component/Header";
import Trending from "@/component/Trending";
import Creator from "@/component/Creator";

const page = () => {
  return (
    <div className="bg-[#2B2B2B] overflow-hidden">
      <Navbar/>
      <Header/>
      <Trending />
      <Creator />
      {/* <Footer /> */}
    </div>
  )
}

export default page;