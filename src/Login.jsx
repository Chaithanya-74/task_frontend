import React,{useState} from "react";
import PublicContainer from "./component/public/PublicContainer";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    // const [Name, setName] = useState('');



    const[Email,  setEmail]=useState('');
    const[Password, setPassword]=useState('');
   const[message, setMessage]=useState('');
    const navigate = useNavigate();

const handleChange = (event) => {
    const { name, value } = event.target;

    // if (name === 'Name') {
    //     setName(value);
    // }


    if (name === 'username') {
        setEmail(value);
    } 
    else if (name === 'password') {
        setPassword(value);
    }
};


const handleSubmit = async(event) => {
    event.preventDefault();
    if (Email&&Password) {
        try{
            const response = await fetch('http://localhost:8080/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: Email, password: Password })
            });
            const data = await response.json();
            if (response.ok) {
        
        navigate('/tasklist');
    } else {
        setMessage('Invalid email or password'||'  Please try again');
    }

    
}
catch (error) {
    setMessage('An error occurred. Please try again later.');
}}
else {
    alert('invalid email or password');
}}; 

    return (
        
        <PublicContainer>
            <div class="login-page">
                <div class="login"> 
                    <h1>Login</h1>
                    {/* <span>login</span> */}
                    <form   onSubmit={handleSubmit}>

{/* <input type="text" placeholder="Name" name='Name' onChange={handleChange} /> */}

                <input type="text" placeholder="Email" name='username'   onChange={
                    handleChange
                }/>
                <input type="password" placeholder="Password"name='password' onChange={handleChange} />
                <button type="submit">TaskLogin</button>
            </form>
                    {message && <p>{message}</p>}
                </div>
        {/* <div> */}
            {/* <h1>Login</h1> */}
            
         </div> 
        </PublicContainer>
        
    );
}
export default Login;