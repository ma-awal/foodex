import React from 'react';
import Signin from '../../components/Signin/Signin';
const Login = () => {
  return (
    <div className="container py-3 py-md-4 py-lg-5">
      <div className="row justify-content-center ">
        <div className="col-12 col-md-10 col-lg-8">
          <Signin />
        </div>
      </div>
    </div>
  );
};

export default Login;
