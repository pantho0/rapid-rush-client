import { Link, NavLink } from "react-router-dom";
import Container from "../../Layouts/Container/Container";
import { FaAlignJustify } from "react-icons/fa6";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logOutUser} = useContext(authContext);
  const handleLogout = () =>{
    logOutUser()
    console.log('clicked logout');
  }

  const navLinks = (
    <div className="flex items-center gap-4">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#F7FF00]" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#F7FF00]" : "text-white"
          }
        >
          Sign Up
        </NavLink>
      </li>
      {!user ?  <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#F7FF00]" : "text-white"
            }
          >
            Login
          </NavLink>
        </li>
      : 
      <li>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
        </div>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li disabled>
          <button className="justify-between" disabled>
          {user?.displayName}
            <span className="badge">Admin</span>
          </button>
        </li>
        <li><Link to={'/dashboard/profile'}>Dashboard</Link></li>
        <li ><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
    </li>  
      }
    </div>
  );
  return (
    <div className="bg-[#3b0032]">
      <Container>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-[#3b0032]">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <FaAlignJustify className="text-2xl text-white"></FaAlignJustify>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2 font-rapid text-[#F7FF00] text-4xl font-semibold">
                Rapid<span className="text-[#fff]">Rush</span>
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu-horizontal gap-2">
                  {/* Navbar menu content here */}
                  {navLinks}
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="p-4 w-80 min-h-full bg-[#3b0032]">
              {/* Sidebar content here */}
              {navLinks}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
