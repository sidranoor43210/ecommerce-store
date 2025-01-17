import React from "react";
import BannerImg from "../../assets/women/women2.png"
const Banner = () => {
    return(
        <div className="min-h-[550px] flex
        justify-center items-center py-12
        sm:py-0"> 
            <div className="container">
<div className="grid 
grid-cols-1 sm:grid-cols2
gap-6 items-center">
{/*Image Section */}
<div>
    <img src={BannerImg} alt=""/>
</div>
{/*text details section */}


</div>
 </div>
 </div>
    )
}

export default Banner;


