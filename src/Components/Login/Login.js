import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user
        ,
        ,
        ,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate('/')
    }
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
               <input type="email" ref={email} id="form3Example3cg" className="form-control form-control-lg bg-white" />
               <label className="form-label" >Your Email</label>
             </div>

             <div className="form-outline mb-4">
               <input type="password" ref={password} id="form3Example4cg" className="form-control form-control-lg bg-white" />
               <label className="form-label" >Password</label>
                                             </div>
                                             <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                </div>
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