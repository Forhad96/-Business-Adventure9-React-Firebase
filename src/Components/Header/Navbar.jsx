import { NavLink } from "react-router-dom";
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
      <NavLink to="/" className="navbar-item">
        Home
      </NavLink>
      <NavLink to="/about" className="navbar-item">
        About
      </NavLink>
      <NavLink to="/contact" className="navbar-item">
        Contact
      </NavLink>
      <NavLink to="/moments" className="navbar-item">
        Moments
      </NavLink>
      <NavLink to="/login" className="navbar-item">
        Login
      </NavLink>
    </>
  );

  return (
    <div className="navbar rounded-lg bg-green-2 ">
      <div className="navbar-start">
        <a className="navbar-item text-green-10 text-2xl">Business Adventure</a>
      </div>
      <div className="navbar-center">{links}</div>
      <div className="navbar-end">
        {user ? (
          <div className="avatar avatar-ring avatar-md">
            <div className="dropdown-container">
              <div className="dropdown">
                <label
                  className="btn btn-ghost flex cursor-pointer px-0"
                  tabIndex="0"
                >
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="avatar"
                  />
                </label>
                <div className="dropdown-menu dropdown-menu-bottom-left">
                  <a className="dropdown-item text-sm">Profile</a>
                  <a tabIndex="-1" className="dropdown-item text-sm">
                    Account settings
                  </a>
                  <a onClick={handleLogOut} tabIndex="-1" className="dropdown-item text-sm">
                    LogOut
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
        
            <div className="bg-green-10 py-2 px-4  rounded">

              <Login></Login>
            </div>
       
        )}
      </div>
    </div>
  );
};

export default Navbar;
