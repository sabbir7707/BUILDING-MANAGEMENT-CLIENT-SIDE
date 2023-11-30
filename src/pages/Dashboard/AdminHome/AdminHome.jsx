import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import useMenu from "../../../hooks/useMenu";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCart from "../../../hooks/useCart";


const AdminHome = () => {
    const { user } = useAuth();
    const   axiosPublic  = useAxiosPublic();
  
   

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    const axiosSecure = useAxiosSecure();
    const { data: users = [],  } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
  
    const [menu] = useMenu();

  
    


    return (
        <div>
            <a
                href="#"
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Building   Management Admin
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">{user?.displayName}</p>
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                        <img
                            alt="Paul Clapton"
                            src={user?.photoURL}
                            className="h-16 w-16 rounded-lg object-cover shadow-sm"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="max-w-[40ch] text-sm text-gray-500">
                        Building management involves the effective operation, maintenance, and supervision of various systems within a building to ensure its optimal performance, safety, and efficiency
                    </p>
                </div>

                <dl className="mt-6 flex gap-4 sm:gap-6">
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Published</dt>
                        <dd className="text-xs text-gray-500">31st June, 2021</dd>
                    </div>


                </dl>
            </a>


            <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div
                        className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                    >
                        <dt className="order-last text-lg font-medium text-gray-500">
                            Total User
                        </dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                            {users.length}
                        </dd>
                    </div>

                    <div
                        className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                    >
                        <dt className="order-last text-lg font-medium text-gray-500">
                            Total Apartment 
                        </dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{menu.length}</dd>
                    </div>

                    <div
                        className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                    >
                        <dt className="order-last text-lg font-medium text-gray-500">
                        Apartment Room
                        </dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl"> {menu.length * 2}</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default AdminHome;