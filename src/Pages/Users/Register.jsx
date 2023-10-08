import { useContext, useState } from "react";
import Login from "./Login";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
  const [error, setError] = useState(null);

  const { createUser, profileUpdate } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const c_Password = form.get("c_password");


    // validation
    const capitalValid = /[A-Z]/.test(password)
    const spacialCharValid = /[^A-Za-z0-9]/.test(password);
    if (password !== c_Password) {
      setError("Passwords do not match.");
      toast.error("Password do not match");
      return false;
    }
    else if(password.length < 6){
      setError("Password must 6 characters or long");
      toast.error("Password must 6 characters or long");
      return false
    }
    else if (!capitalValid){
      setError("Password must contain at least one capital letter.");
      toast.error("Password must contain at least one capital letter.");
      return false
    }
    else if(!spacialCharValid){
      toast.error("Password must contain at least one special character.");
      setError("Password must contain at least one special character.");
      return false
    }
      // create user in firebase
      createUser(email, password)
      .then((result) => {
        console.log(result.user);
        profileUpdate(name,photo)
          .then(()=>{
            toast.success('Successfully create account')
          })
          .catch(error=>{
            toast.error(error.code)
          })
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.code)
        });
  };

  return (
    <div>
      <div>
        {/* Container */}
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            {/* Row */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* Col */}
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")',
                }}
              />
              {/* Col */}
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">
                  Create an Account!
                </h3>
                <form
                  onSubmit={handleRegister}
                  className="px-8 pt-6  mb-4 bg-white rounded"
                >
                  <div className="mb-4 ">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="Name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder=" Name"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="photo"
                    >
                      Photo url
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="photo"
                      name="photo"
                      type="text"
                      placeholder="Photo Url"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className=" mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>

                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                        id="c_password"
                        name="c_password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </div>
                  <p
                    className={`text-sm italic ml-2 mb-4 ${
                      error ? "text-red-500" : null
                    } `}
                  >
                    {error
                      ? error
                      : "Password at least 6 characters long and has one special character and one capital letter."}
                  </p>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Register Account
                    </button>
                  </div>
                  <div className="divider text-sm">
                    Login with social accounts
                  </div>
                </form>
                <SocialLogin></SocialLogin>
                <div className="text-center">
                  <a
                    className="inline-block text-sm dark:text-gray-5 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <span className="inline-block text-sm dark:text-gray-5 align-baseline hover:text-blue-800">
                    Already have an account?
                  </span>
                  <span className="link link-primary text-sm ">
                    <Login></Login>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
