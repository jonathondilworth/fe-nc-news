import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Home = () => {

    const { currentUser } = useContext(UserContext);

    return (
        <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">NC News</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A social news aggregation, web content rating and discussion website.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              { currentUser ? `Hello, ${currentUser}` : (
                `Hello, guest.`
              ) }
            </p>
            { currentUser ? '' : (
                <p className='mt-6 text-lg leading-8 text-gray-300'><small>Try <a href="/login">signing in</a> as tickle122.</small></p>
            )}
          </div>
        </div>
      </div>
    );
};

export default Home;