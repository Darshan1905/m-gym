import '../App.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form,Container,Card } from 'react-bootstrap';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  getAdditionalUserInfo} from 'firebase/auth';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const Login = () => {


    
  useEffect(() => {
          
    const token = localStorage.getItem("user-info")
    if(token == null){
      history.push("/login");
    }else{

    history.push("/register");
    }
    },[])
  

  const [data,setData] = useState({
    email: '',
    password: ''

  })
  const auth = getAuth();
  const handleInputs = (event) => {
  let inputs = {[event.target.name] : event.target.value}

  setData({ ...data, ...inputs})
  }




  


  const handleSubmit = async (event) => {
  
    event.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response) =>  {
     
        alert("Register Successful")
      history.push("/view");
     
    })
 
    .catch((err) => {
       alert("User already Register")
    })
  
    
  
  }
  

  let history = useHistory();


  return (
    <>
     <Header/>
    

<Container className='p-5 text-center'  >

<div className="formdata">
         <div className="card p-5 bg-black  "> 
          <Form onSubmit={handleSubmit}>
          <Card.Title><p className='text-white cardhead'>Register</p></Card.Title>

           
            
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              onChange={(event) => handleInputs(event)}
            ></input>


            <input
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              onChange={(event) => handleInputs(event)}
            ></input>

            <br />
            <br />

            <button type="submit" className="fbutton">
              Sign In
            </button>
          </Form>
        </div>
        </div>

</Container>
<Footer/>
</>
   
  );
}

export default Login;
