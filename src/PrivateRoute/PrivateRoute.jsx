import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    if(loading){
        return (
          <div className="flex items-center justify-center h-screen">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200" />
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
            </div>
          </div>
        );

    }
    if(user){
        return children;
    }
    return (document.getElementById("modal-1").checked = true);
};
PrivateRoute.propTypes ={
    children: PropTypes.node.isRequired
}
export default PrivateRoute;