import React from 'react'
import Layout from '../components/layouts/Layout'
import log from "../assets/login_img.png"

function SignUp() {
  return (
    <Layout><div className="box_signup m-8 flex justify-center">
        <img  className='' style={{width:"850px"}} src={log} alt=" " />

        <div className="login_Form ml-36 mt-40">
        <form>
    <h1 className='text-[50px] font-medium mb-3'>Create an account</h1>        
    <h1 class="h3 mb-11  fw-normal">Enter your details below</h1>

    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="Name"/>
    <label for="floatingInput">Name</label>
</div>

    <div class="form-floating mb-3">

      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary w-100 h-12 mb-2 py-2 mt-6" type="submit">Sign in</button>
    
        <button class=" items-center bg-white text-gray-700 border border-gray-300 rounded-md px-4 py-2 shadow-sm h-12 w-100 flex justify-center">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" class="w-5 h-5 mr-2"/>
            Sign up with Google
        </button>
    
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
  </form>

        </div>

    </div>



    </Layout>
  )
}

export default SignUp