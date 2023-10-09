import { Link, NavLink } from "react-router-dom";
import Login from "../../Pages/Users/Login";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)


  // handle logoUt 
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      toast.success('LogOut Successful')
    })
    .catch(error=>{
      toast.error(error.code)
    })

  }
  const links = (
    <>
      <NavLink to="/" className="navbar-item hover:text-yellow-300 text-white font-bold ">
        Home
      </NavLink>
      <NavLink to="/about" className="navbar-item text-white font-bold ">
        About
      </NavLink>
      <NavLink to="/contact" className="navbar-item text-white font-bold ">
        Contact
      </NavLink>
      <NavLink to="/moments" className="navbar-item text-white font-bold ">
        Moments
      </NavLink>
      
      {
        user?<NavLink to="/favorites" className="navbar-item text-white font-bold ">
        Favorites
      </NavLink>:null
      }

      {
        user?
      <NavLink to="/profile" className="navbar-item text-white font-bold ">
        Profile
      </NavLink>:
      null
      }
    </>
  );

  return (
    <div className="navbar bg-[#088395] rounded-lg  ">
      <div className="navbar-start">
        <Link
          to="/"
          className="navbar-item text-[#fff] text-xl "
        >
          <span className="text-4xl   bg-cyan-900 px-2  rounded-full">
            B
          </span>
          <span className="">Adventure</span>
        </Link>
      </div>
      <div className="navbar-center hidden md:block">{links}</div>
      <div className="navbar-end">
        <div className="avatar avatar-ring avatar-md">
          <div className="dropdown-container">
            <div className="dropdown">
              <label
                className="btn btn-ghost flex cursor-pointer px-0"
                tabIndex="0"
              >
                <img
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  }
                  alt="avatar"
                />
              </label>
              <div className="dropdown-menu bg-[#176B87] dropdown-menu-bottom-left ">
                <a
                  tabIndex="-1"
                  className=" text-sm dropdown-active bg-yellow-400 text-center py-4 rounded mb-2 text-black font-extrabold"
                >
                  {user?.displayName}
                </a>
                <NavLink
                  to="/"
                  className="dropdown-item hover:text-black  text-sm text-white "
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="dropdown-item hover:text-black  text-sm text-white "
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="dropdown-item hover:text-black  text-sm text-white "
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/moments"
                  className="dropdown-item hover:text-black  text-sm text-white "
                >
                  Moments
                </NavLink>

                {user ? (
                  <NavLink
                    to="/favorites"
                    className="dropdown-item hover:text-black  text-sm text-white"
                  >
                    Favorites
                  </NavLink>
                ) : null}

                <a
                  onClick={handleLogOut}
                  tabIndex="-1"
                  className="dropdown-item text-sm hover:text-black  text-white"
                >
                  LogOut
                </a>
              </div>
            </div>
          </div>
        </div>
        {user ? (
          <a
            onClick={handleLogOut}
            className="ml-2 py-2 px-3 font-extrabold rounded bg-yellow-400"
          >
            LogOut
          </a>
        ) : (
          <Login></Login>
        )}
      </div>
    </div>
  );
};

export default Navbar;
