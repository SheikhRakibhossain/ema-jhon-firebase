import React, { useContext, useState } from 'react';
import './Login.css'
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    // const [error, setError] = useState('')
    const{userLogin} = useContext(AuthContext)

    const signInHandler = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(email, password)
        .then(result =>{
            const loggedBoy = result.user;
            console.log(loggedBoy);
        })
        .catch(error => {
           console.log(error)
        })
    }

    return (
        <div className='container mx-auto px-4' >
            <h2>Login please</h2>
            <form onSubmit={signInHandler}>
            <div className='my-4'>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>

              <div className='py-4'>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
              <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                Sign in
              </button>
            </div>
            </form>
            <p>New to here ? <Link to='/signup'>Login</Link> </p>
            {/* <p>{error}</p> */}

        </div>
    );
};

export default Login;