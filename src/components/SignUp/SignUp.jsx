import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
  const[error, setError] = useState('')
  const {user, userCreate} = useContext(AuthContext)

  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name =form.name.value;
    const email = form.email.value;
    const password =form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
    setError('');
    if(password !== confirmPassword){
      setError('You both password did not match')
      return
    }
    else if((password && confirmPassword) <6){
      setError('Your password should be more than 6 characters')
    }
    userCreate(email, password, confirmPassword)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error =>{
      console.log(error);
      setError(error.message)
    })

  }
    return (
        <div className='container mx-auto px-4'>
            <h2>This is sign up page</h2>
            {user ? <p>{user.studentId}</p>:'user does not find' }
            <div >
                <form onSubmit={handleSignUp} className="mt-8 space-y-6 w-6/12">
            <input type="hidden" name="remember" defaultValue="true" />
            
            <div className="-space-y-px rounded-md shadow-sm">
              <div className='mb-4'>
                <label htmlFor="email-address" className="sr-only">
                 Your name
                </label>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your name"
                />
              </div>
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
              <div className=''>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
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
                    <p>already have account? <Link to='/login'>Login</Link> </p>
            </div>
            <p className='font-bold text-red-500'>{error}</p>
        </div>
    );
};

export default SignUp;