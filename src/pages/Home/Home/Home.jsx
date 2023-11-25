import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Map from "../Map/Map";
import About_building from "../About_building/About_building";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> BUILDING MANAGEMENT | Home</title>
            </Helmet>
            <Banner></Banner>

            <About_building></About_building>

           {/*  <Category></Category>
            <PopularMenu></PopularMenu> */}


            <Featured></Featured>
           {/* <Testimonials></Testimonials> */}
 
            <Map></Map>
        </div>
    );
};

export default Home;