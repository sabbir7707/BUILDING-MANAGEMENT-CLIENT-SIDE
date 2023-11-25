import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import './Featured.css';
import pic from '../../../assets/Coupon/2150799665.jpg'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
             <SectionTitle
            subHeading={" BUILDING MANAGEMENT"}
            heading={"Coupon"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                
                 
            <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
                <img
                    alt="Trainer"
                    src={pic}
                    className="h-32 w-full object-cover md:h-full"
                />

                <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                    <p className="text-sm font-semibold uppercase tracking-widest">
                        Use Coupon : SB3303CA
                    </p>

                    <h2 className="mt-6 font-black uppercase">
                        <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                            Get 20% off
                        </span>

                      {/*   <span className="mt-2 block text-sm"></span> */}
                    </h2>

                    <button
                        className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                      
                    >
                        Get Discount
                    </button>

                    <p className="mt-8 text-xs font-medium uppercase text-gray-200">
                        Offer valid until 24th March, 2024 *
                    </p>
                </div>
            </section>








            </div>
        </div>
    );
};

export default Featured;