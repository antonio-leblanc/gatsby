import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Projects() {

// useEffect(() => {

//   AOS.init({
//     offset:150,
//     duration:1000,
//     once:false
//   });
//   }, []);

//   useEffect(() => {
//     if (AOS) {
//       AOS.refresh();
//     }
//   });
  
  return (<>
    <div data-aos="fade-left">
      <div>Pantera</div>
      <div>ThreeJs</div>
      <div>FireMap</div>
    </div>
    </>
  )
}