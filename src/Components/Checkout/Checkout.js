import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Contextapi } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
const Checkout = () => {
    const [data,] = useContext(Contextapi)
    const {picture,balance,name} = data
    const handelClick = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value
        const number = event.target.number.value;
        if (name && email && address && number) {
            
            toast('thank you Submetting')
        }
        else {
            toast('All Input Required')
        }
    }
    return (

       
        <div className='d-flex justify-content-center align-items-center py-5' style={{minHeight:'100vh',width:'100%'}}>
            <div >
                <img src={picture} style={{ width: "350px", height: "350px" }} alt="" />
                <h3 className='text-center'>{name}</h3>
                <h3 className='text-center'>{balance}</h3>
                <Form onSubmit={handelClick}>
                <Form.Group className="mb-3" >
   
            <Form.Control  className='bg-white' name='name' type="text" placeholder="Your Name" />
                    </Form.Group>
                    
         <Form.Group className="mb-3" >
         <Form.Control  className='bg-white' name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
    <Form.Control  className='bg-white' type="text" name='address' placeholder="Enter Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
    <Form.Control className='bg-white' name='number' type="number" placeholder="Phone Number" />
  </Form.Group>
  <input  className='btn btn-primary' type="submit" value={'Submit'}/>
</Form>

<ToastContainer></ToastContainer>
           </div>
            


        </div>
    );
};

export default Checkout;