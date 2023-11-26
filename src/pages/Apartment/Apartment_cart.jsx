import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";


const Apartment_cart = ({item}) => {
       console.log(item);
       const {image,
        _id,
       floor_no,
       block_name,
       apartment_no,
       rent} = item ;

       const { user } = useAuth();
       const navigate = useNavigate();
       const location = useLocation();
       const axiosSecure = useAxiosSecure();
       const [, refetch] = useCart();
   
       const handleAddToCart = () => {
           if (user && user.email) {
               //send cart item to the database
               const cartItem = {
                   menuId: _id,
                   email: user.email,
                   image,
                
               }
               axiosSecure.post('/carts', cartItem)
                   .then(res => {
                       console.log(res.data)
                       if (res.data.insertedId) {
                           Swal.fire({
                               position: "top-end",
                               icon: "success",
                               title: `${name} added to your cart`,
                               showConfirmButton: false,
                               timer: 1500
                           });
                           // refetch cart to update the cart items count
                           refetch();
                       }
   
                   })
           }
           else {
               Swal.fire({
                   title: "You are not Logged In",
                   text: "Please login to add to the cart?",
                   icon: "warning",
                   showCancelButton: true,
                   confirmButtonColor: "#3085d6",
                   cancelButtonColor: "#d33",
                   confirmButtonText: "Yes, login!"
               }).then((result) => {
                   if (result.isConfirmed) {
                       //   send the user to the login page
                       navigate('/login', { state: { from: location } })
                   }
               });
           }
       }
   

       

    return (
        <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
          alt="Home"
          src={image}
          className="h-56 w-full rounded-md object-cover"
        
        />
        
      
        <div className="mt-2">
          <dl>
            <div className=" flex justify-between"> 
            <div>
              <dt className="sr-only">Price</dt>
      
              <dd className="text-sm text-gray-500">${rent}</dd>
            </div>
            <div>
              <dt className="sr-only">Floor_No</dt>
      
              <dd className="text-sm text-gray-500">Floor No: {floor_no}</dd>
            </div>

            </div>
      
            <div className="flex justify-around">
              <dt className="sr-only">block_name</dt>
      
              <dd className="font-medium">Block Name :{block_name}</dd>
              <dd className="font-medium">Apartment No:{apartment_no}</dd>

            </div>
          </dl>
      
          <div className="mt-6 flex justify-center  items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
      
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Parking</p>
      
                <p className="font-medium">2 spaces</p>
              </div>
            </div>
      
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
      
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Bathroom</p>
      
                <p className="font-medium">2 rooms</p>
              </div>
            </div>
      
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
      
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Bedroom</p>
      
                <p className="font-medium">4 rooms</p>
              </div>


            </div>

            
          </div>
          <div className="card-actions justify-center">
                    <button
                        onClick={handleAddToCart}
                        className=" px-32  btn btn-outline  bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                    >Add to Cart</button>
                </div>
        </div>
      </a>
    );
};

export default Apartment_cart;