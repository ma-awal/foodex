import React from 'react';
import './style.css';

const Signin = () => {
  return (
    <div className="Signin shadow  ">
      <h3 className="mb-3 common  text-center py-2">Sign In</h3>
      <form action="" className="  py-3  px-4 ">
        <div className="input_div     ">
          <div className="w-100 mb-3">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-100 form-control   "
              placeholder="Email"
            />
          </div>
          <div className="w-100  ">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="number"
              name="number"
              className="w-100 form-control  "
              placeholder="Password"
            />
          </div>
          <div className="sumbit-btn text-center">
            <button className=" border-0 rounded-0 mt-4  fw-medium px-4 fs-6  py-2  btn-process btn mx-auto mb-2 ">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
