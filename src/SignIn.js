import React,{useState} from 'react';
import './SignIn.css';
import axios from 'axios';
function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateUser(){
      if(!password){
        console.log({error:"Missing Password"})
      }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const loginuser={
          email:email,
          password:password
        }
        validateUser()
        
        axios.post(`https://reqres.in/api/login`,loginuser)
        
        .then(response =>{
            console.log(response.data)
        })
        .catch(error=>console.log(error))
    };
    

    return(
        <>
        <div class="title">
            <p class="tools">ATools</p>
            <button type="submit" class="startfreetrialbtn">Start Free Trial</button>
            <button type="submit" class="login">Login</button>
        </div>
        <p class="welcomeback">Welcome Back</p>
        <p class="subtitle">Sub-title text goes here</p>
        
        <form className='form' onSubmit={handleSubmit}>
                
              <div className='form-control'>
                  <div>
                  <input class="emailstyle"
                  type='text' 
                  id='email' 
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email *'>

                  </input>
                  <p id="req" style={{"fontSize":"small","color":"red","marginTop":"1px"}}></p>
                  </div>
                 
                </div>

                <div className='form-control'>

                  <div>
                  <input class="passstyle"
                  type='password'
                   id='password' 
                   name='password'
                   value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password *'>

                   </input>
                   <p id="req1" style={{"fontSize":"small","color":"red","marginTop":"1px"}}></p>
                   </div>
                </div>
                
                <button type="submit" class="loginbtn">Login</button>
                <div style={{"display":"flex"}}>
                <div class="form-check" style={{"marginLeft":"45px"}}>
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{"color":"#003366"}}/>
              <label class="form-check-label" for="flexCheckDefault" id="rememberpassword">Remember Password</label>
              </div>
                    <p class="forgotpassword">Forgot Password?</p>
                </div>


                
          </form>
          
          
        </>
     )
}
export default SignIn