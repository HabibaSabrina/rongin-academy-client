import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-green-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <img className='w-80' src="/error.png" alt="" />
        <div className='max-w-md text-center'>
          <h2 className='mb-4 font-extrabold text-9xl text-green-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl text-blue-800 font-semibold md:text-3xl mb-3'>Oops! Page Not Found</p>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='p-4 rounded-xl mt-5 text-white font-semibold bg-green-600'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage