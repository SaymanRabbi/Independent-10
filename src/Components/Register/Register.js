import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import google from '../../image/google.svg'
import github from '../../image/download.png'
const Register = () => {
  const [signInWithGoogle, googleuser, , ] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubuser, ,] = useSignInWithGithub(auth);
  const navigate = useNavigate()
    const [updateProfile, , ] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user
        ,
        ,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  useEffect(() => {
    if (user || googleuser || githubuser) {
      toast('Login Sucess')
      navigate('/')
   }
   },[user,navigate,googleuser,githubuser])
    const [checked,setChecked]=useState(false)
    const name = useRef('')
    const email = useRef('')
    const password = useRef('')
    const confirmPass = useRef('')
    const HandelClick = async(event) => {
        event.preventDefault()
        const nameValue = name.current.value;
        const emailValue = email.current.value
        const passwordValue = password.current.value
        const confirmPassValue = confirmPass.current.value
        if (emailValue && passwordValue === confirmPassValue) {
            await createUserWithEmailAndPassword(emailValue, passwordValue)
            await updateProfile({ displayName: nameValue });
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
          <ToastContainer></ToastContainer>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3 py-5">
       <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={HandelClick}>

                <div className="form-outline mb-4">
                  <input type="text" ref={name} id="form3Example1cg" className="form-control form-control-lg bg-white" required />
                  <label className="form-label " >Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" ref={email} id="form3Example3cg" className="form-control form-control-lg bg-white" required/>
                  <label className="form-label" >Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" ref={password} id="form3Example4cg" className="form-control form-control-lg bg-white" required/>
                  <label className="form-label" >Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" ref={confirmPass} id="form3Example4cdg" className="form-control form-control-lg bg-white" required/>
                  <label className="form-label" >Repeat your password</label>
                </div>
                        {error?.message ? <p className='text-danger'>{error.message}</p>:''}
                <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    onClick={()=>setChecked(!checked)}
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" >
                    I agree all statements in <span className="text-body"><u>Terms of service</u></span>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" disabled={!checked}>Register</button>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                          <button onClick={loginwithgoogle} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >
                            <img src={google} className='mr-2' alt="" />
                            Google Login</button>
                          <button onClick={loginWithGithub} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body ms-3" >
                            <img src={github} style={{width:'30px',height:'30px'}} alt="" />
                            Github Login</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <span className="fw-bold text-body"><Link to='/login'>Login here</Link></span></p>

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

export default Register;