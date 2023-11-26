import SectionTitle from "../../components/SectionTitle/SectionTitle";

import Apartment_cart from "./Apartment_cart";
import menuImg from '../../assets/home/3d-electric-car-building.jpg'
import Cover from "../Shared/Cover/Cover";

import './button/pgbutton.css'
import useMenu from "../../hooks/useMenu";


const Apartment = () => {
  
const [product ] =  useMenu();
  
    return (
        <div>

            <Cover img={menuImg} title="Apartment"></Cover>

            <SectionTitle
                subHeading={"  BUILDING  MANAGEMENT "}
                heading={"  Apartment"}
            ></SectionTitle>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    product.map(item => <Apartment_cart
                        key={item._id}
                        item={item}
                    ></Apartment_cart>)
                }
            </div>



        </div>
    );
};

export default Apartment;