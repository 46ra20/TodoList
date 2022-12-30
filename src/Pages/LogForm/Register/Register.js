import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";

const Register = () => {
  const { singUp } = useContext(AuthContext);
  const [error, setError] = useState("");
  
  //navigate user after login
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || '/';


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    singUp(email, password)
      .then((result) => {
        navigate(from,{replace:true});
        form.reset();
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
  
  return (
    <div className="flex justify-center items-center">
      <div className="w-full mx-3 md:w-1/2 lg:w-1/4 border shadow-lg rounded my-10 p-5">
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            placeholder="your name"
            name="name"
            className="input w-full my-3 shadow-lg"
            data-tooltip-content="Enter Your Name"
          />
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
          <p className="mb-2">Already Have An Account<Link to={'/login'} className='underline text-blue-600'> Please Login.</Link></p>
          {
            error && <p className="text-red-500">{error}</p>
          }
          <input type={"submit"} value="Register" className="btn w-full" />
        </form>
      </div>
    </div>
  );
};

export default Register;
