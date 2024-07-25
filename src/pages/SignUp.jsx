import React, { useState } from 'react';
import Layout from '../components/layouts/Layout';
import log from "../assets/login_img.png";
import { useDispatch } from 'react-redux';
import { adduser } from '../Store/redux';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adduser({ name, email, pass }))
    setName("");
    setEmail("");
    setPass("");
  };

  return (
    <Layout>
      <div className="box_signup m-8 flex justify-center">
        <img className='' style={{ width: "850px" }} src={log} alt=" " />
        <div className="login_Form ml-36 mt-40">
          <form onSubmit={handleSubmit}>
            <h1 className='text-[50px] font-medium mb-3'>Create an account</h1>
            <h1 className="h3 mb-11 fw-normal">Enter your details below</h1>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <label htmlFor="floatingInputName">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInputEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputEmail">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 h-12 mb-2 py-2 mt-6" type="submit">Sign in</button>
            <button className="items-center bg-white text-gray-700 border border-gray-300 rounded-md px-4 py-2 shadow-sm h-12 w-100 flex justify-center">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
