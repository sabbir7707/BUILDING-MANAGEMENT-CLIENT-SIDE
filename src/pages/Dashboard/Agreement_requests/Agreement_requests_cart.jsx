import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";



const Agreement_requests_cart = ({item}) => {
    console.log(item);
   
    const axiosPublic = useAxiosPublic();

 /*    const { user } = useAuth(); */
    /*  console.log(user); */
     const navigate = useNavigate();
     const location = useLocation();
     const axiosSecure = useAxiosSecure();
     const [, refetch] = useCart();
 

const { apartment_no,
    _id, block_name,date,email,floor_no,name,rent,image} = item


    const handleAddToCart = () => {
        
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email,
               name,
               date,
                image,
                floor_no,
                block_name,
                apartment_no,
                rent,
             
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${apartment_no} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }

                })
        }
       
       
    












    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/agreement/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                           /*  window.location.reload(); */
                           refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        < article
        className = "hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
              >
              <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
      
      
                  <a href="#">
                      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                          Email:{email}
                      </h3>
                      <h3 className="mt-0.5 text-sm font-medium text-gray-900">
                          Name:  {name}
                      </h3>
                      <h3 className="mt-0.5 text-xs font-medium text-gray-900">
                          Date: {date}
                      </h3>
                  </a>
                  
                  <p  className="block text-xs text-gray-500">
                  Apartment No:  {apartment_no}
                  </p>
                  <p  className="block text-xs text-gray-500">
                   Block Name:  {block_name}
                  </p>
                  <p  className="block text-xs text-gray-500">
                   Floor Name:  {floor_no}
                  </p>
                  <p className="block text-xs text-gray-500">
                      Rent:$ {rent}
                  </p>
      
                  <div className="mt-4 flex flex-wrap gap-1">
                      <span
                          className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                      >
                           <button onClick={() => handleDelete(item._id)}> Delete</button>
                      </span>
      
                      <span
                          className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                      >
                         <button
                        onClick={handleAddToCart}> Accepet </button>
                      </span>
                  </div>
              </div>
      </article >
    );
};

export default Agreement_requests_cart;