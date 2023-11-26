import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
   /*  console.log(user); */
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
       <li><Link to="Apartment">Apartment</Link></li>
      
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
                            {navOptions}
                            {
                                user ? <>
                                    <span className=" pl-2 font-extrabold text-orange-500">{user?.displayName}</span>
                                    <button onClick={handleLogOut} className="btn btn-ghost">LOGOUT</button>
                                </> : <>
                                    <li><Link to="/login">LOGIN</Link></li>
                                </>
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-sm  BUILDING MANAGEMENT BUILDING MANAGEMENT from-neutral-600    max-sm:hidden "> BUILDING MANAGEMENT</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <span className=" pr-4 text-xl font-semibold text-white-700">{user?.displayName}</span>
                            {/*  <img src={user?.photoURL ? user?.photoURL : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /> */}

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL ? user?.photoURL : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  bg-slate-600 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={handleLogOut} className="text-red-500" ><a>Logout</a></li>
                                </ul>
                            </div>

                            {/* <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button> */}
                        </> : <>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    }


                </div>
            </div>
        </>
    );
};

export default NavBar;