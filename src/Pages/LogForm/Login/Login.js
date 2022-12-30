import React, { useContext, useState } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import { toast } from "react-toastify";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {user, loginWithGoogle, loginWithEmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  
  //navigate user after login
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || '/';

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        navigate(from,{replace:true});
      })
      .catch((err) => setError(err.code));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmail(email, password)
      .then((result) => {
        navigate(from,{replace:true});
        form.reset();
        toast.success("Successfully Login");
      })
      .catch(err=> {
        if(err.code==="auth/user-not-found"){
            setError("Sorry No User Found with this email please create one")
        }
        if(err.code==="auth/wrong-password"){

            setError("Your Password doesn't match with user")
        }
        })
  };
  
  if(user?.uid){
    return <Navigate to={from} replace={true} />
  }
  return (
    <div className="flex justify-center items-center">
      <div className="w-full mx-3 md:w-1/2 lg:w-1/4 border shadow-lg rounded my-10 p-5">
        <form onSubmit={handleSubmit}>
          <input
            type={"email"}
            placeholder="e-mail@mail.com"
            name="email"
            className="input w-full my-3 shadow-lg"
            data-tooltip-content="Enter Your Email"
            required
          />
          <input
            type={"password"}
            placeholder="######"
            name="password"
            className="input w-full mb-3 shadow-lg"
            data-tooltip-content="Enter Your Password"
            required
          />
          <p className="mb-2">You Have No Account Please <Link to={'/register'} className='underline text-blue-600'>Create One.</Link></p>
          {
            error && <p className="text-red-500">{error}</p>
          }
          <input type={"submit"} value="Login" className="btn w-full" />
        </form>
        <h2 className="divider text-center my-3">Or</h2>
        <button className="btn w-full" onClick={handleGoogleLogin}>
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
