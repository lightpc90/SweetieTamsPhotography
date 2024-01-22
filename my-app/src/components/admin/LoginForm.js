import React from 'react'
import RoundDp from '../about/RoundDp'

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="font-bold text-xl lg:text-3xl">Admin Login Form</div>
      <div className="relative flex flex-col w-10/12 lg:w-5/12 mt-[150px] lg:mt-[190px] justify-center items-center ">
        {/* display picture */}
        <RoundDp />
        <div className="bg-[#1A3B2F] w-full rounded-md h-[370px] lg:h-[500px] gap-2 flex flex-col justify-center items-center px-3">
          <input
            type="tex"
            className="w-full lg:w-6/12 px-2 py-1 rounded-sm mt-[160px]"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full lg:w-6/12 px-2 py-1 rounded-sm"
            placeholder="Password"
          />
          <button className="bg-[#BD8E25] w-full lg:w-6/12 px-2 py-1 rounded-sm text-white font-bold hover:bg-white hover:text-gray-400">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm