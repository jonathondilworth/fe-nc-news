import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({ error }) => {
    return (
        <>
            <main className="relative isolate min-h-full">
            <img
                src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                <p className="text-base font-semibold leading-8 text-white">{ error.err.response.status }</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{ error.error }</h1>
                <p className="mt-4 text-base text-white/70 sm:mt-6">{ error.err.response.status === 404 ? 'Sorry, we couldn’t find the page you’re looking for.' : 'Sorry, something went wrong!' }</p>
                <div className="mt-10 flex justify-center">
                <Link to="/" className="text-sm font-semibold leading-7 text-white">
                    <span aria-hidden="true">&larr;</span> Back to home
                </Link>
                </div>
            </div>
            </main>
        </>
    );
};

export default Error;