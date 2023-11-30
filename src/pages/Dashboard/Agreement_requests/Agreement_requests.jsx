import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FcAcceptDatabase } from "react-icons/fc";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Agreement_requests_cart from "./Agreement_requests_cart";

const Agreement_requests = () => {
    const {user} = useAuth ();

   
    const axiosSecure  = useAxiosSecure();
    const navigate = useNavigate();

    const { data: agreement = [], isPending: loading, refetch } = useQuery({
        queryKey: ['agreement'],
        queryFn: async () => {
            const res = await axiosSecure.get('/agreement');
            return res.data;
        }
    })
    console.log(agreement);

    
 
    return (
        <div>
             <SectionTitle heading="Agreement" subHeading=" Agreement" ></SectionTitle>
        <div className=" grid grid-cols-1   md:grid-cols-2  gap-y-8 gap-x-2">
           
            {
                agreement.map(item => <Agreement_requests_cart key={item._id}
                    item={item}
                >

                </Agreement_requests_cart>)
            }
        </div>
    </div>
    );
};

export default Agreement_requests;