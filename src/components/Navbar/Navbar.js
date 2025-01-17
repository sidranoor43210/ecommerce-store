import React from "react";
import { IoMdSearch } from "react-icons/io";
import {FaCaretDown, FaCartShopping} from "react-icons/fa6";
import DarkMode from "../DarkMode";

const Menu= [
{
    id:1,
    name:"Home",
    link:"/#",
},
{
    id: 2,
    name:"Top Rated",
    link:"/#services",
},
{
    id: 3,
    name:"Kids Wear",
    link:"/#",
},

{
    id: 3,
    name:"Mens Wear",
    link:"/#",
},
{
    id: 3,
    name:"Electronics",
    link:"/#",
},
];
const DropdownLinks =[
    {
        id: 1,
        name: "Trending Items",
        link:"/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link:"/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link:"/#",
    },
];
const Navbar=({handleOrderPopup})=> {
  return <div className="shadow-md bg-white 
  dark:bg-gray-900
  dark:text-white duration-200
  relative z-40">
   {/* upper Navbar */}
    <div className="bg-primary/40 py-2"> 
    <div className="container flex  items-center">
    <div>
<a href="#" className="font-bold
text-2xl sm:text-3xl flex gap-2">
    <img src="https://img.icons8.com/?size=48&id=uSHYbs6PJfMT&format=png" alt="Logo"
    className="w-10"/>
    Shopify
</a>
</div>
{/* search bar */}
<div className="flex justify-end flex-1
items-center gap-4">
<div className="realtive group 
flex justify-between items-center
hidden sm:block">
    <input
     type="text"
    placeholder="search"
    className="w-[200px] sm:w-[200px]
    group-hover:w-[300px]
    trasition-all
    duration-300 rounded-full border
    border-gray-300 px-2 py-1
    focus:outline-none  focus:border-1
    focus:border-primary"/>

 {/*<IoMdSearch className="text-gray-500 group-hover:text-primary absoulte top-1/2 
//-translate-y-1/2 right-3"/> */}

</div>
{/* order button */}
<button
 onClick={()=> handleOrderPopup()}
   className="bg-gradient-to-r from-primary
   to-secondary transition-all duration-200
   -translate-x-1 -translate-y-0.3
   text-white py-1 px-3 rounded-full flex
   items-center group" 
    >
    <span
    className="group-hover:block
    hidden transition-all duration-200">
        Order
    </span>
    <FaCartShopping className="text-xl
    text-white drop-shadow-sm
    cursor-pointer"/>
</button>
</div>

{/* DarkMode Switch */}
<div>
    <DarkMode />
</div>
    </div>
    </div>
   {/* lower Navbar */}
    <div data-aos="zoom-in"
     className="flex justify-center">   
<ul className="sm:flex hidden items-center 
gap-4">
{Menu.map((data)=>(
<li key={data.id}>
 <a href={data.link}
 className="inline-block px-4 
 hover:text-primary duration-200">
    {data.name}</a>
</li>
))}
{/*Simple Dropdown and Links*/}
<li className="group relative cursor-pointer">
    <a href="#"
    className="flex items-center gap-[2px] py-2">
Trending Products
<span>
    <FaCaretDown
    className="transition-all
    duration-200 group-hover:rotate-180"/>
    </span>   
    </a>
<div className="absolute z-[9999] hidden
group-hover:block w-[150px] rounded-md
bg-white p-2 text-black shadow-md">
    <ul>
        {DropdownLinks.map((data) => (
            <li key={data.id}>
                <a href={data.link}
                className="inline-block w-full
                rounded-md p-2 hover:bg-primary/20"
>
               {data.name}
                </a>
            </li>
        ))}
    </ul>
</div>

</li>

</ul>



    </div>

  </div>;
};

export default Navbar;
