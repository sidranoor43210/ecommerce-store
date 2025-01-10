import React from "react";
import Image1 from "../../assets/Image1.png"
import Image2 from "../../assets/Image2.png"
import Image3 from "../../assets/Image3.png"
import Slider from "react-slick"

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Men`s Wear",
        description:
            "lorem His Life will forever be Chnaged dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        id: 2,
        img: Image2,
        title: "Upto 50% off on all Men`s Wear",
        description:
            "lorem His Life will forever be Chnaged dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        id: 3,
        img: Image3,
        title: "Upto 50% off on all Men`s Wear",
        description:
            "lorem His Life will forever be Chnaged dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
];
const Hero = () => {
    return ( 
    <div className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center items-center
    dark:bg-gray-950 dark:text-white duration-200">
{/* background pattern  */}
<div className="h-[700px] w-[700px] bg-primary/40
absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
{/* hero section */}
<div className="container pb-8 sm:pb-0">
{/* hero content */}
<Slider>
<div>
<div className="grid grid-cols-1 sm:grid-cols-2">

    {/*text content section */}
<div className="flex flex-col justify-center gap-4
pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
relative z-10">
    <h1>Lorem ipsum dolor sit.</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit.Vitae,ad?
    </p>
</div>

<div>
    <button className="bg-gradient-to-r
    from-primary to-secondary hover:scale-105
    duration-200 text-white py-2 px-4 rounded-full">
Order Now
    </button>
</div>
</div>

{/*Image section */}
<div className="order-1 sm:order-2">
    <div className="relative z-10">
        <img src={Image1} alt=""
        className="w-[300px] h-[300px] sm:h-[450px]
        sm:w-[450px] sm:scale-125 object-contain mx-auto" />
    </div>
</div>
</div>
</Slider>
</div>
</div>
    );
};

export default Hero;