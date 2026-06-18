// import React from 'react'

// const ticker = () => {
//   return (
//     <div><div class="ticker_ticker__9Jcrk"><span style="animation-duration: 50s;">Beware Of Fraud!: For our website use only www.dvago.pk. For Calling &amp; WhatsApp please use 021-11-11-38246. Do not trust unauthorized websites/apps claiming to be Dvago. Stay vigilant!</span></div></div>
//   )
// }

// export default ticker




"use client";

import React from "react";
import  "./ticker.css";

const Ticker = () => {
  return (
    <div className="w-full bg-green-600 overflow-hidden py-2">
      <div className="whitespace-nowrap animate-marquee">
        <span className="text-white font-medium text-sm md:text-base px-4">
          Beware Of Fraud!: For our website use only www.dvago.pk.
          For Calling & WhatsApp please use 021-11-11-38246.
          Do not trust unauthorized websites/apps claiming to be Dvago.
          Stay vigilant!
        </span>
      </div>
    </div>
  );
};

export default Ticker;





















// "use client";

// import React from "react";
// import Link from "next/link";


// const Navbars = () => {
//   return (
//     <div className="bg-white text-black p-4 shadow-md">
//       <ul className="flex justify-center items-center w-full py-4 gap-8 text-sm font-medium ">
//         <li><Link href="/" className="hover:text-green-500 transition">Home </Link></li>

//         <li className="relative group">
//           <Link href="/medicine" className="flex items-center gap-1 hover:text-green-500 transition">Medicine  </Link>
//           <ul className="absolute hidden group-hover:block bg-white left-0 top-5 shadow-lg rounded-lg min-w-50 overflow-hidden z-50">
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Derma</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Gastro-intertinal Tract</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Circulatory System</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Others</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Endocrine System</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Eyes,Nose,Ear</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Urinary Tract System</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Central Nervous System</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Respiratory Tract System</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Cardio-Vascular System</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Oral Care</Link></li>
//           </ul>
//         </li>

//         <li className="relative group">
//           <Link href="/babymothercare" className="flex items-center gap-1 hover:text-green-500 transition">Baby & Mother Care</Link>
//           <ul className="absolute hidden group-hover:block bg-white left-0 top-5 shadow-lg rounded-lg min-w-50 overflow-hidden z-50">
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Baby Diapers & Wipes</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Baby Bath & Body</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">New Mommy Aids</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Baby Food & Milk</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Baby Appliances</Link></li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Baby Essentials</Link></li>
//           </ul>
//         </li>



//         <li className="relative group">
//           <Link href="/versions" className="flex items-center gap-1 hover:text-green-500 transition"> Nutritions & Supplements  </Link>
//           <ul className="absolute hidden group-hover:block bg-white left-0 top-5 shadow-lg rounded-lg min-w-50 overflow-hidden z-50">
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Multivitamins</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Nutritional Drinks</Link> </li>
//           </ul>
//         </li>


//         <li className="relative group">
//           <Link href="/versions" className="flex items-center gap-1 hover:text-green-500 transition"> Foods & Beverages </Link>
//           <ul className="absolute hidden group-hover:block bg-white left-0 top-5 shadow-lg rounded-lg min-w-50 overflow-hidden z-50">
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Haney & Oils</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Beverages</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Chocolate & Confectionery</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Biscuits & Wafers</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Package Food</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Tea & Coffee</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Snacks</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Breakfast & Cereals</Link> </li>
//           </ul>
//         </li>



//         <li className="relative group">
//           <Link href="/versions" className="flex items-center gap-1 hover:text-green-500 transition"> Devices & Support </Link>
//           <ul className="absolute hidden group-hover:block bg-white left-0 top-5 shadow-lg rounded-lg min-w-50 overflow-hidden z-50">
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Cells & Batteries</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Other Applicances</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">BP Monitors</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Diabetes Apparatus</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Supports & Braces</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Mobility Equipments</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Medicine Accessories</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Thermometer</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Steamers, Nebulizers & Vaporizers</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Body Massagers</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Weighing Scales</Link> </li>
//           </ul>
//         </li>




//         <li className="relative group">
//           <Link href="/versions" className="flex items-center gap-1 hover:text-green-500 transition"> Personal Cars  </Link>
//           <ul className="absolute hidden group-hover:block bg-white left-0 top-5 shadow-lg rounded-lg min-w-50 overflow-hidden z-50">
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">Men Orooming</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Skin Care</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Hair Care</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Sexual Weliness</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Corona Essentials</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Adult Diapers & Wipes</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Feminine Care</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Makeup</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Hand & Foot Care</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Appliances</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Personal Grooming</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Body Care</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Dental Care</Link> </li>
//           </ul>
//         </li>



//         <li className="relative group">
//           <Link href="/versions" className="flex items-center gap-1 hover:text-green-500 transition"> OTC And Health Need </Link>

//           <ul className="absolute hidden group-hover:block bg-white left-0 top-5 shadow-lg rounded-lg min-w-50 overflow-hidden z-50">
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"><Link href="#">First Aid</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">cidity & Indigestion</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Pain & Fever</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Cough & Cold</Link> </li>
//             <li className="hover:bg-green-500 hover:text-white px-4 py-2 transition"> <Link href="#">Diarrhea & Vomiting</Link> </li>
//           </ul>
//         </li>



//       </ul>
//     </div>
//   );
// };

// export default Navbars;



