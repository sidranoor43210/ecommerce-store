import React from "react";
import Banner from "../../assets/women/orange-pattern.jpg"

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
}
const Subscribe =()=> {
    return(
        <div 
        data-aos="zoom-in"
        className="mt-12 mb-20 bg-gray-100 dark:bg-gray-800
        text-white"
        style={BannerImg}>
<div className="container back-blur-sm py-10">
<div className="space-y-6 max-w-xl mx-auto">
    <h1
    className="text-2xl !text-center sm:text-left "
    >Get Notified About New Products</h1>
<input 
data-aos="fade-up"
type="text"
placeholder="Enter your email"
className="w-full p-3 "/>

</div>
</div>
        </div>
    );
};
export default Subscribe;