import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = () => {
    return(
        <div className='w5 center pa2 ma5 ba br3 grow mw5 shadow-3 static'>
            <form className=' ma2'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className=" f4 pa2 form-label tracked">Username</label>
    <input type="text" className="form-control dim"/> 
    <label for="exampleInputEmail1" className=" f4 pa2 form-label tracked">Email address</label>
    <input type="email" className="form-control dim" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text mid-gray">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="f4 pa2 tracked form-label">Password</label>
    <input type="password" className="form-control dim " id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="tracked bg-navy ph5 br4 dim btn btn-primary">Submit</button>
</form>
        </div>

    );
} 


export default Form ;