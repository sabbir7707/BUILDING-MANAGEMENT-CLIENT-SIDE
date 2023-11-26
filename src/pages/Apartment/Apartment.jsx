import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Apartment_cart from "./Apartment_cart";
import menuImg from '../../assets/home/3d-electric-car-building.jpg'
import Cover from "../Shared/Cover/Cover";


const Apartment = () => {
    const [data] = useMenu();
    console.log(data);

  
    return (
        <div>

            <Cover img={menuImg} title="Apartment"></Cover>

            <SectionTitle
                subHeading={"  BUILDING  MANAGEMENT "}
                heading={"  Apartment"}
            ></SectionTitle>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    data.map(item => <Apartment_cart
                        key={item._id}
                        item={item}
                    ></Apartment_cart>)
                }
            </div>
        </div>
    );
};

export default Apartment;