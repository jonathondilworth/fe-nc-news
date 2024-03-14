import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { getUser } from '../api';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { setCurrentUser } = useContext(UserContext);
    const [usernameInput, setUsernameInput] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleUsernameChange = (event) => {
        setUsernameInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');
        getUser(usernameInput)
        .then(({ data: { user: { username }}}) => {
            // username exists
            setCurrentUser(username);
            setIsLoading(false);
            navigate('/');
        })
        .catch((err) => {
            if (err.response.status === 404) {
                // user does not exist
                setError('Unable to log you in.');
            } else {
                // some other error has occured
                setError('Something has gone wrong, please try again later.');
            }
            setIsLoading(false);
        });
    };

    return (
        <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500"
                      value={usernameInput}
                      onChange={handleUsernameChange}
                      disabled={isLoading}
                    />
                  </div>
                  { error ? (
                    <p style={{color: 'red'}}>{error}</p>
                  ) : '' }
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
    
            </div>
          </div>
        </>
      );
};

export default Login;