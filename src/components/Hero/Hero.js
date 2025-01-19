import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";


const ImageList = [
    {
        id: 1,
        img:Image1,
        title: "Upto 30% off on all Products",
        description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        id: 2,
        img: Image2,
        title: "Upto 50% off on all Men's Wear",
        description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        id: 3,
        img: Image3,
        title: "Upto 70% off on different Items",
        description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
];

const Hero = ({handleOrderPopup}) => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            {/* background pattern */}
            <div className="h-[700px] w-[700px] bg-primary/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
            
            {/* hero section */}
            <div className="container mx-auto pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={`slide-wrapper-${data.id}`}>
                            <div key={`slide-content-${data.id}`} className="grid grid-cols-1 sm:grid-cols-2">
                                {/* text content section */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1
                                    data-aos="zoom-out"
                                    data-aos-once="true"
                                    data-aos-duration="400"
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                        {data.title}
                                    </h1>
                                    <p 
                                     data-aos="fade-up"
                                    data-aos-delay="100"
                                     data-aos-duration="500"
                                     className="text-sm">
                                        {data.description}
                                    </p>
                                    <div>
                                        <button
                                        onClick={handleOrderPopup}
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                         data-aos-duration="500"
                                        className="bg-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Image section */}
                                <div className="order-1 sm:order-2 ">
                                    <div
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className="relative z-10">
                                        <img
                                            src={data.img}
                                            alt={`Slide ${data.id}`}
                                            className="w-[300px] h-[300px]
                                            sm:h-[450px] sm:w-[450px] sm:scale-100 object-contain mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;