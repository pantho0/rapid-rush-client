import { NavLink } from "react-router-dom";
import Container from "../../Layouts/Container/Container";
import { FaAlignJustify } from "react-icons/fa6";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#F7FF00]" : "text-white"
        }
        >Home</NavLink>
      </li>
      <li>
        <NavLink
        to="/signup"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#F7FF00]" : "text-white"
        }
        >Sign Up</NavLink>
      </li>
      <li>
        <NavLink
        to="/signup"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#F7FF00]" : "text-white"
        }
        >Login</NavLink>
      </li>
    </>
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
            <ul className="menu p-4 w-80 min-h-full bg-[#3b0032]">
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
