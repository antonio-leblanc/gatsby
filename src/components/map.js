import React from 'react';
// import React, { useEffect } from 'react';

export default function Map() {

  return (<>
  <section className="bg-img-4 section"></section>

  <section className="travel section" id= "travel">
    <h1 className="text-mask" data-aos="fade-up">
      Travel
    </h1> 
    
    <div>
      <div id="travel-map"></div>
    </div>
  </section>
  </>
  );
};