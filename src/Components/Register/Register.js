import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
const Register = () => {
    const navigate = useNavigate()
    const [updateProfile, , ] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user
        ,
        ,
        ,
    ] = useCreateUserWithEmailAndPassword(auth, { emailVerificationOptions: true });
    if (user) {
       navigate('/')
   }
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


    return (
        <div   style={{minHeight:"100vh"}}>
           <section >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3 py-5">
       <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={HandelClick}>

                <div className="form-outline mb-4">
                  <input type="text" ref={name} id="form3Example1cg" className="form-control form-control-lg bg-white" />
                  <label className="form-label " >Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" ref={email} id="form3Example3cg" className="form-control form-control-lg bg-white" />
                  <label className="form-label" >Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" ref={password} id="form3Example4cg" className="form-control form-control-lg bg-white" />
                  <label className="form-label" >Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" ref={confirmPass} id="form3Example4cdg" className="form-control form-control-lg bg-white" />
                  <label className="form-label" >Repeat your password</label>
                </div>

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