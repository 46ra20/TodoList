import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../UserContext/UserContext';
import { toast } from 'react-toastify';

const Login = () => {
    const {loginWithGoogle,loginWithEmail} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleGoogleLogin = ()=>{
        loginWithGoogle()
        .then(()=>{})
        .catch(err=>setError(err))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
        .then((result)=>{
            if(result?.user?.uid){
                form.reset()
                toast.success('Successfully Login')
            }
        })
        .catch(err=>setError(err))
    }

    console.log(error)
    return (
        <div className='flex justify-center items-center'>
            <div className='w-full mx-3 md:w-1/2 lg:w-1/4 border shadow-lg rounded my-10 p-5'>
                <form onSubmit={handleSubmit}>
                    <input type={'email'} placeholder='e-mail@mail.com' name='email' className='input w-full my-3 shadow-lg' data-tooltip-content="Enter Your Email" required/>
                    <input type={'password'} placeholder='######' name='password' className='input w-full mb-3 shadow-lg' data-tooltip-content='Enter Your Password' required/>
                    <input type={'submit'} value='Login' className='btn w-full'/>
                </form>
                <h2 className='divider text-center my-3'>Or</h2>
                <button className='btn w-full' onClick={handleGoogleLogin}>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;