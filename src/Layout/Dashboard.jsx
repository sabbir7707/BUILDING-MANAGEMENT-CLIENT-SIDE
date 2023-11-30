
import { FaAd, FaAddressBook, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUsers, FaUtensils } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { MdOutlinePayment } from "react-icons/md";


const Dashboard = () => {
    const { user } = useAuth();
    const [cart] = useCart();

 
    const [isAdmin] = useAdmin();

    return (
        <div className=" flex ">
            <div className="min-h-screen rounded-b-2xl p-3 space-y-2  md:w-60  lg:w-60 bg-gray-900 text-gray-100 ">
                <div className="flex items-center p-2 space-x-2">


                        <img src= {user?.photoURL } alt="" className="w-12 h-12 rounded-full bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                        <span className="flex items-center space-x-1">
                        <Link to='/userProfile'>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">View profile</a>

                          </Link>
                        </span>
                    </div>

                </div>


                {/* fffffffff */}

                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <ul className="menu p-2">
                            {
                                isAdmin ? <>
                                    <li className="dark:bg-gray-800 dark:text-gray-50">
                                        <NavLink to="/dashboard/adminHome">
                                            <FaHome></FaHome>
                                            Admin Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addItems">
                                        <FaAddressBook/>
                                            Add Items</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/makeAnnouncement">
                                        <FaAddressBook/>
                                        Make Announcement</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageItems">
                                            <FaList></FaList>
                                            Manage Items</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/Agreement_requests">
                                            <FaBook></FaBook>
                                            Agreement requests</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/users">
                                            <FaUsers></FaUsers>
                                            ALL Members</NavLink>
                                    </li>
                                </>
                                    :
                                    <>
                                        <li className="dark:bg-gray-800 dark:text-gray-50">
                                            <NavLink to="/dashboard/cart">
                                                <FaHome></FaHome>
                                                My Apartment</NavLink>
                                        </li>
                                        <li className="dark:bg-gray-800 dark:text-gray-50">
                                            <NavLink to="/dashboard/makepayment">
                                            <MdOutlinePayment />
                                                 Make Payment</NavLink>
                                        </li>
                                        <li className="dark:bg-gray-800 dark:text-gray-50">
                                            <NavLink to="/dashboard/UserAnnouncement">
                                                <FaCalendar></FaCalendar>
                                                Announcement</NavLink>
                                        </li>

        
                                        <li className="dark:bg-gray-800 dark:text-gray-50">
                                            <NavLink to="/dashboard/paymentHistory">
                                                <FaList></FaList>
                                                 Payment History</NavLink>
                                        </li>
                                    </>
                            }
                            {/* shared nav links */}
                            <div className="divider  dark:bg-gray-800 dark:text-gray-50">
                                
                            </div>
                             <li className="dark:bg-gray-800 dark:text-gray-50">
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    Home</NavLink>
                            </li>
                            <li className="dark:bg-gray-800 dark:text-gray-50">
                                <NavLink to="/order/salad">
                                    <FaSearch></FaSearch>
                                    Menu</NavLink>
                            </li>
                            <li className="dark:bg-gray-800 dark:text-gray-50">
                                <NavLink to="/dashboard/contact">
                                    <FaEnvelope></FaEnvelope>
                                    Contact</NavLink>
                            </li>
                        </ul>
                    </ul>

                </div>


            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>


        </div>





    );
};

export default Dashboard;





