import React, { useState } from 'react'
import Slider from "react-slick";
import { bannerImgOne } from '../../assets/ass';
import { bannerImgTwo } from '../../assets/ass';
import { bannerImgThree } from '../../assets/ass';
import { bannerImgFour } from '../../assets/ass';
import { bannerImgFive } from '../../assets/ass';
const Banner = () => {
  const [dotActive,setDotActive] = useState(0);
   const settings = {
     dots: true,
     infinite: true,
     autoplay: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     beforeChange: (next) => {
       setDotActive(next);
     },
     appendDots: (dots) => (
       <div
         style={{
           position: "absolute",
           top: "70%",
           left:"0",
           right:"0",
           margin:"0 auto",
           transform: "translate(-50% -50%)",
           width: "210px",
         }}>
         <ul
           style={{
             width: "100%",
             display: "flex",
             alignItems: "center",
             justifyContent: "space-between",
           }}>
           {" "}
           {dots}{" "}
         </ul>
       </div>
     ),
     customPaging: (i) => (
       <div
         style={
           i === dotActive
             ? {
                 width: "30px",
                 height: "30px",
                 borderRadius: "50%",
                 display: "flex",
                 background: "grey",
                 justifyContent: "center",
                 cursor: "pointer",
                 padding: "8px 0",
                 alignItems: "center",
                 color: "#131921",
                 border: "1px  solid #3a847",
               }
             : {
                 width: "30px",
                 height: "30px",
                 borderRadius: "50%",
                 display: "flex",
                 background: "#131921",
                 justifyContent: "center",
                 cursor: "pointer",
                 padding: "8px 0",
                 alignItems: "center",
                 color: "white",
                 border: "1px  solid #3a847",
               }
         }>
         {i + 1}
       </div>
     ),
    responsive: [
  {
    breakpoint:576,
    settings : {
     dots: true,
     appendDots: (dots) => (
       <div
         style={{
           position: "absolute",
           top: "70%",
           left:"0",
           right:"0",
           margin:"0 auto",
           transform: "translate(-50% -50%)",
           width: "210px",
         }}>
         <ul
           style={{
             width: "100%",
             display: "flex",
             alignItems: "center",
             justifyContent: "space-between",
           }}>
           {" "}
           {dots}{" "}
         </ul>
       </div>
     ),
     customPaging: (i) => (
       <div
         style={
           i === dotActive
             ? {
                 width: "20px",
                 height: "20px",
                 borderRadius: "50%",
                 display: "flex",
                 background: "grey",
                 justifyContent: "center",
                 cursor: "pointer",
                 padding: "8px 0",
                 alignItems: "center",
                 color: "#131921",
                 border: "1px  solid #3a847",
               }
             : {
                 width: "30px",
                 height: "30px",
                 borderRadius: "50%",
                 display: "flex",
                 background: "#131921",
                 justifyContent: "center",
                 cursor: "pointer",
                 padding: "8px 0",
                 alignItems: "center",
                 color: "white",
                 border: "1px  solid #3a847",
               }
         }>
         {i + 1}
       </div>
     )
       }, 
      },  
     ],
   };
  return (
    <div className='w-full'>
    <div className='w-full h-full relative'>
      <Slider {...settings}>
        <div>
          <img src={bannerImgOne} alt="bannerImgOne" />
        </div>
        <div>
          <img src={bannerImgTwo} alt="bannerImgTwo" />
        </div>{" "}
        <div>
          <img src={bannerImgThree} alt="bannerImgThree" />
        </div>{" "}
        <div>
          <img src={bannerImgFour} alt="bannerImgFour" />
        </div>{" "}
        <div>
          <img src={bannerImgFive} alt="bannerImgFive" />
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Banner