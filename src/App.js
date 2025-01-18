import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css"
import Hero from "./components/Hero/Hero"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
<<<<<<< HEAD
import Banner from "./components/Banner/Banner";
=======
>>>>>>> 52ae6a555135cf2bba10e0d8ce319ac081090960
const App=()=> {
 React.useEffect(()=>{
  AOS.init({
    offset:100,
    duration:800,
    easing: "ease-in-sine",
    delay:100,
  });
  AOS.refresh();
},[]);
  return <div>
<Navbar/>
<Hero/>
<Products/>
<TopProducts/>
<<<<<<< HEAD
<Banner/>
=======
>>>>>>> 52ae6a555135cf2bba10e0d8ce319ac081090960
  </div>;
};

export default App;
