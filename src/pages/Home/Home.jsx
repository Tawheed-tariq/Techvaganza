import Footer from "../../Components/Footer";

import Hero from "./Components/Hero";
import StickySocialSidebar from "./Components/StickySocialSidebar";

import Gallery from "./Components/Gallery";


export default function Home() {
  return (
    <>
      
      <div className="content">
          <Hero />
          <Gallery/>
          <StickySocialSidebar />
          <Footer />
      </div>
    </>
  );
}
