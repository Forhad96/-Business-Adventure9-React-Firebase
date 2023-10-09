import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Profile = () => {
  const {user} = useContext(AuthContext)

    return (
      <section className="h-screen my-10">
        <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
          <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <a href="#" className="relative block">
                  <img
                    alt="profile"
                    src={user?.photoURL}
                    className="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                </a>
                <h1 className="text-white text-xl">{user.displayName}</h1>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-white">
            <div className="items-center w-full p-4 space-y-4 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm text-xl mx-auto md:w-1/3">Account</h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <h1 className="">{user?.email}</h1>
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-4 space-y-4  md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Phone Number</h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div className=" relative ">
                    <h1 className="">{user?.phoneNumber?user?.phoneNumber:'12345678098'}</h1>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-8 space-y-4  md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-4/12">Change password</h2>
              <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                <div className=" relative ">
                  <input
                    type="text"
                    id="user-info-password"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="text-center md:w-3/12 md:pl-6">
                <button
                  type="button"
                  className="py-2 px-4  bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Change
                </button>
              </div>
            </div>
            <hr />
            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                className="py-2 px-4  bg-cyan-600 hover:bg-cyan-800 focus:ring-cyan-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    );
};

export default Profile;