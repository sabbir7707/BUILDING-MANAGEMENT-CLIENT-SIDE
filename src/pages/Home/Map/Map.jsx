import React, { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
/* import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;  */


const Map = () => {

    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=22.813900;
        const lon=89.567231;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    }) 

   /*  const defaultProps = {
        center: {
            
     
          lat: 22.841930,
          lng: 89.558060
        },
        zoom: 11
    }; */
    return (
           <div>
                <SectionTitle
            subHeading={" Apartment’s location "}
            heading={"MAPS"}
            ></SectionTitle>
        

                        <iframe id="iframeId" height="500px" width="100%"></iframe>
         
        
      </div>
    );
};

export default Map ;