import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { singInEmail } = useContext(AuthContext);

  // this handle for when click sing up button close login pop up
  const handleSingUp = () => {
    document.getElementById("modal-1").checked = false;
  };

  // handle  login form

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // validation
    singInEmail(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  return (
    <article>
      <label className="" htmlFor="modal-1">
        Login
      </label>

      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        <div className="modal-content flex w-full flex-col gap-5 p-7">
          <label
            htmlFor="modal-1"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-col gap-2">
            <h2 className="text-center text-2xl font-semibold">Sign In</h2>
            <p className="mx-auto max-w-xs text-sm text-content2">
              Sign in to your account to continue.
            </p>
          </div>

          <section>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <div className="form-field">
                  <label className="form-label">Email address</label>
                  <input
                    placeholder="Type here"
                    type="email"
                    name="email"
                    className="input max-w-full"
                  />
                  <label className="form-label">
                    <span className="form-label-alt">
                      Please enter a valid email.
                    </span>
                  </label>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    <span>Password</span>
                  </label>
                  <div className="form-control">
                    <input
                      placeholder="Type here"
                      type="password"
                      name="password"
                      className="input max-w-full"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <div className="form-control justify-between">
                    <div>
                      <input type="checkbox" className="checkbox" />
                      <a href="#">Remember me</a>
                    </div>
                    <label className="form-label">
                      <a className="link link-underline-hover link-primary text-sm">
                        Forgot your password?
                      </a>
                    </label>
                  </div>
                </div>

                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button type="submit" className="btn btn-primary w-full">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <div className="divider text-sm">Login with social accounts</div>

            <SocialLogin></SocialLogin>

            <div className="items-center justify-center text-xs dark:text-gray-5 sm:px-6 flex gap-2">
              <span>Don&rsquo;t have an account?</span>
              <Link
                onClick={handleSingUp}
                className="link link-primary text-xs "
                to="/register"
              >
                Sing Up
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Login;
