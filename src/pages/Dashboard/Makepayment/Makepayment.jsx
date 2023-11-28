import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Makepayment = () => {
    const {user} = useAuth ();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.rent, 0);
    const axiosSecure = useAxiosSecure();

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

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
        <div>
            <div className="flex justify-evenly mb-8">
                {/*  <h2 className="text-4xl">Apartment No: {cart.length}</h2> */}
                <h2 className="text-4xl">  Total Price: $ {totalPrice}</h2>
                {cart.length ? <Link to="/dashboard/payment">
                <button className="btn btn-outline btn-secondary">Pay</button>
                </Link>:
                <button disabled className="btn btn-primary ">Pay</button>
                }
             
            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full min-w-full text-xs">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th> Floor No</th>
                            <th> Block Name</th>
                            <th>Apartment No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.rent}</td>
                                <td>  Floor No : <span className="text-red-500">  {item. floor_no} </span> </td>
                                <td>  Block :{item. block_name}</td>

                                <td> Apartment No:{item. apartment_no}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Makepayment;