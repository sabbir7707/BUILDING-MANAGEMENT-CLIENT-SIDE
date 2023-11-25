import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import slide1 from '../../../assets/Amenities/AA.webp';
import slide2 from '../../../assets/Amenities/BB.webp';
import slide3 from '../../../assets/Amenities/CC.webp';
import slide4 from '../../../assets/Amenities/DD.webp';
import slide5 from '../../../assets/Amenities/EE.webp';

const About_building = () => {
    return (
        <div> 
              <SectionTitle
            subHeading={" ABOUT   BUILDING "}
            heading={" Amenities"}
            ></SectionTitle>
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold">Community Amenities</h2>
                        <p className="dark:text-gray-400">Element offers a pet friendly community with upgraded amenities that make life more comfortable and convenient.</p>
                        

                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                   <img src={slide1} alt="" />
                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <div>
                                            <p className="text-lg font-semibold">Fitness Center</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                <img src={slide2} alt="" />
                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <div>
                                            <p className="text-lg font-semibold">Bike Repair Station</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                <img src={slide3} alt="" />
                                    <div className="flex items-center mt-4 space-x-4">
                                        
                                        <div>
                                            <p className="text-lg font-semibold">Patio</p>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                <img src={slide4} alt="" />
                                    <div className="flex items-center mt-4 space-x-4">
                                       
                                        <div>
                                            <p className="text-lg font-semibold">Bike Storage Room</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                <img src={slide5} alt="" />
                                    <div className="flex items-center mt-4 space-x-4">
                                    
                                        <div>
                                            <p className="text-lg font-semibold">Parking Garage</p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default About_building;