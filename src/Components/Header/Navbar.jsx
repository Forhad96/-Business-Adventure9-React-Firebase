import { Link, NavLink } from "react-router-dom";
import Login from "../../Pages/Users/Login";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  // handle Login
  const handleLog = () => {
    document.getElementById("modal-1").checked = true;
  };

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
      <NavLink to="/" className="navbar-item ">
        Home
      </NavLink>
      <NavLink to="/about" className="navbar-item ">
        About
      </NavLink>
      <NavLink to="/contact" className="navbar-item ">
        Contact
      </NavLink>
      <NavLink to="/moments" className="navbar-item ">
        Moments
      </NavLink>
      
      {
        user?<NavLink to="/favorites" className="navbar-item ">
        Favorites
      </NavLink>:null
      }
      <NavLink to="/profile" className="navbar-item ">
        Profile
      </NavLink>
    </>
  );

  return (
    <div className="navbar rounded-lg bg-[#176B87] ">
      <div className="navbar-start">
        <Link to="/" className="navbar-item text-white text-2xl">
          Business Adventure
        </Link>
      </div>
      <div className="navbar-center text-red-200  hidden md:block">{links}</div>
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
                <div className="dropdown-menu bg-[#176B87] dropdown-menu-bottom-left">
                  <a tabIndex="-1" className=" text-sm">
                    {user?.displayName}
                  </a>
                  <Link to="/profile" className="dropdown-item text-sm">
                    Profile
                  </Link>
                  <div className="md:hidden flex flex-col dropdown-item text-sm">
                    {links}
                  </div>
                  <a
                    onClick={handleLogOut}
                    tabIndex="-1"
                    className="dropdown-item text-sm"
                  >
                    LogOut
                  </a>
                </div>
              </div>
            </div>
          </div>
       
       
                <Login></Login>

        {/* <div className="text-[#DAFFFB] text-lg font-medium border-2 border-success p-2 px-4  rounded shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
          </div> */}
      </div>
    </div>
  );
};

export default Navbar;
