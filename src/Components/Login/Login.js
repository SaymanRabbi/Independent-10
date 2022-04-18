import React, { useEffect, useRef} from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../image/google.svg'
import github from '../../image/download.png'
const Login = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [signInWithGoogle, googleuser, , ] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubuser, ,] = useSignInWithGithub(auth);
  const navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user
        ,
        ,
        error
    ] = useSignInWithEmailAndPassword(auth);
   
     
  useEffect(() => {
    if (user || googleuser || githubuser) {
      toast("Login SuccessFully")
      navigate(from, { replace: true });
    }
       
      },[user,navigate,from,googleuser,githubuser])
   
    const email = useRef('')
    const password = useRef('')
    const HandelClick = async(event) => {
        event.preventDefault()
        
        const emailValue = email.current.value
        const passwordValue = password.current.value
        
        if (emailValue && passwordValue) {
            signInWithEmailAndPassword(emailValue,passwordValue)
       }
  }
  const updatepass = async()=>{
    const emailValue = email.current.value
   
    if (emailValue) {
     await sendPasswordResetEmail(emailValue)
     toast("Send Email Succesfully")
    }
    else {
      toast("Provide Your Email")
    }
  }
  const loginwithgoogle = () => {
    signInWithGoogle()
   
  }
  const loginWithGithub = () => {
    signInWithGithub()
   
  }
     return (
        <div   style={{minHeight:"100vh"}}>
         <section >
           <ToastContainer/>
   <div className="mask d-flex align-items-center h-100 gradient-custom-3 py-5">
    <div className="container h-100">
   <div className="row d-flex justify-content-center align-items-center h-100">
     <div className="col-12 col-md-9 col-lg-7 col-xl-6">
       <div className="card" style={{borderRadius: "15px"}}>
         <div className="card-body p-5">
           <h2 className="text-uppercase text-center mb-5">Create an account</h2>

           <form onSubmit={HandelClick}>

             <div className="form-outline mb-4">
               <input type="email" ref={email} id="form3Example3cg" className="form-control form-control-lg bg-white" required/>
               <label className="form-label" >Your Email</label>
             </div>

             <div className="form-outline mb-4">
               <input type="password" ref={password} id="form3Example4cg" className="form-control form-control-lg bg-white" required/>
               <label className="form-label" >Password</label>
                         </div>
                         
                         {error ? <p className='text-danger mt-0 mb-2'>{error.message}</p>:''}
                                             <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                         </div>
                         <div className="d-flex justify-content-center mt-3">
                          <button onClick={loginwithgoogle} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >
                            <img src={google} className='mr-2' alt="" />
                            Google</button>
                          <button onClick={loginWithGithub} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body ms-3" >
                            <img src={github} style={{width:'30px',height:'30px'}} alt="" />
                            Github</button>
                         </div>
                         <p className="text-center text-muted mt-5 mb-0">Don't have Account? <span className="fw-bold text-body"><Link to='/register'>Register here</Link></span></p>
                         <p className="text-center text-muted mt-5 mb-0"><span className="fw-bold text-body"><span onClick={updatepass} className='text-danger' style={{cursor:'pointer'}}>Forget Password?</span></span></p>
           </form>
        </div>
       </div>
     </div>
   </div>
 </div>
</div>
</section>
     </div>
    );
};

export default Login;