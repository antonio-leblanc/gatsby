import React from 'react';
// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  // const defaultPosition = [48.864716, 2.349]; // Paris position

  return (<>
  <section class="bg-img-4 section"></section>

  <section class="travel section" id= "travel">
    <h1 class="text-mask" data-aos="fade-up">
      Travel
    </h1> 
    
    <div>
      <div id="travel-map"></div>
    </div>
  </section>
  </>
  );
};