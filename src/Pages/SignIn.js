import React from 'react'
import techboy from '../assets/techboy.png'

function SignIn() {
  return (
    <div className='md:mx-48'>
        <h1 className='text-[#ff8730] font-semibold text-3xl md:text-5xl text-center mt-[50px]'>Welcome to ETAN!<span className="animate-waving-hand">👋🏻</span></h1>
        <div className='w-full h-auto'>
          <div className='md:flex md:w-[1000px] md:h-[600px] w-[90%] h-full bg-white/20 backdrop-blur-sm rounded-lg justify-center mx-auto mt-[40px] items-center gap-3 border-2 border-white/30'>
            <div className='md:w-[40%] md:h-[80%] w-[90%] h-auto mx-auto my-[20px] rounded-lg'>
              <h1 className='font-semibold text-white text-4xl text-center mb-[15px]'>Log<span className='text-[#ff8730]'>in</span></h1>
                <form className='text-black w-[300px] mx-auto'>
                  <input type='text' id='username' name='username' placeholder='Email or Username' className='w-[300px] h-[45px] my-5 px-2 rounded-md'></input>
                  <input type='password' autoComplete='off' id='password' name='current-password' placeholder='Password' className='w-[300px] h-[45px] px-2 rounded-md'></input><br/>
                  <input type='checkbox' name='rememberme' id='rememberme' placeholder='Remember me' className='mx-[5px] my-[20px]'></input><label htmlFor='rememberme' className='text-white text-md'>Remember me</label> 
                  <button type='submit' className='w-[300px] h-[50px] rounded-lg bg-[#ff8730] hover:bg-[#ffa551] font-bold text-white'>LOG IN</button>
                  <p className='text-center mt-[20px]'><a href='/' className='text-sm text-white hover:underline cursor-pointer'>Forgot Password?</a></p>
                  
                </form>
              <div className='w-[350px] mt-5 grid grid-cols-3 items-center text-white/90 mx-auto'>
                <hr className='bg-gray-300 h-[3px] rounded-full'/>
                <p className='text-center'>OR</p>
                <hr className='bg-gray-300 h-[3px] rounded-full'/>
              </div>
              <button type='submit' className='flex justify-center items-center text-sm bg-transparent border-white/90 border-2 py-2 w-[300px] h-[50px] rounded-md mt-5 text-white mx-auto'><svg className='mr-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>Login in with Google</button>
              <p className='text-sm text-white text-center mt-[20px]'>Doesn't have an account yet? <a href='/' className='hover:underline cursor-pointer text-[#ff8730]'>Sign Up</a></p>
              
            </div>
            <div className='md:w-[50%] md:h-[60%] w-[90%] m-[20px]'><img src={techboy} alt='techboy' className='w-100% justify-center'></img></div>
            
          </div>
        </div>
        <div className='w-full h-screen'></div>
    </div>
  )
}

export default SignIn