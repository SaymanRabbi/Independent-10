import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Contextapi } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
const Checkout = () => {
    const [data,] = useContext(Contextapi)
    const {picture,balance,name} = data
    const handelClick = (event) => {
        event.preventDefault()
        toast('thank you Submetting')
    }
    return (

       
        <div className='d-flex justify-content-center align-items-center py-5' style={{minHeight:'100vh',width:'100%'}}>
            <div >
                <img src={picture} style={{ width: "350px", height: "350px" }} alt="" />
                <h3 className='text-center'>{name}</h3>
                <h3 className='text-center'>{balance}</h3>
                <Form>
                <Form.Group className="mb-3" >
   
            <Form.Control  className='bg-white' type="text" placeholder="Your Name" required/>
                    </Form.Group>
                    
         <Form.Group className="mb-3" >
         <Form.Control  className='bg-white' type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
    <Form.Control  className='bg-white' type="text" placeholder="Enter Address" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
    <Form.Control className='bg-white' type="number" placeholder="Phone Number" required/>
  </Form.Group>
  <Button onClick={handelClick} variant="primary" type="submit">
    Submit
  </Button>
</Form>

<ToastContainer></ToastContainer>
           </div>
            


        </div>
    );
};

export default Checkout;