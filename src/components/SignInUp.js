import React, { useState } from 'react';
import '../css/signInUp.css';
import axios from 'axios';


const SignInUp = (props) => {
  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // New state to track login status
  const [loginError, setLoginError] = useState(''); //to track login error

  const handleLoginClick = () => {
    // Add code to handle login button click
    const apiUrl = process.env.REACT_APP_DOMAIN + `/user/login`;

    const queryParams = {
      userId: userName,
      password: password
    };
    
    //console.log(userName + "," + password);

    axios.post(apiUrl, queryParams)
      .then(response => {
        if(response.status == 200){
          //console.log(response.data);
          setLoggedIn(true); // Update login status
          sessionStorage.setItem('userName', queryParams.userId);  
          setLoginError(''); // Clear any previous error
        }
        else{
          setLoggedIn(false); // Update login status
          sessionStorage.setItem('userName', '');  
        }
      })
      .catch(error => {
        //console.error('Error fetching API:', error);
        if (error.response && error.response.status === 400) {
          setLoginError('Wrong password or user does not exist');
        } else {
          setLoginError('An unexpected error occurred. Please try again.');
        }        
      });   
  };

  const handleCreateAccountClick = () => {
    // Add code to handle create account button click
    const apiUrl = process.env.REACT_APP_DOMAIN + `/user/add`;

    const queryParams = {
      userId: userName,
      password: password
    };
    
    //console.log(userName + "," + password);

    axios.post(apiUrl, queryParams)
      .then(response => {
        if(response.status == 200){
          //console.log(response.data);
          setLoggedIn(true); // Update login status
          sessionStorage.setItem('userName', queryParams.userId);  
          setLoginError(''); // Clear any previous error
        }
        else{
          setLoggedIn(false); // Update login status
          sessionStorage.setItem('userName', '');  
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          setLoginError('Create account error');
        } else {
          setLoginError('An unexpected error occurred');
        }
        //console.error('Error fetching API:', error);         
      });   
  };  
  
  const handleLogoutClick = () => {
    // Add code to handle create account button click
    sessionStorage.setItem('userName', '');
    setLoggedIn(false); // Update login status
    window.location.reload(); // Reload the page
  };  

  if(sessionStorage.getItem('userName')!= null && sessionStorage.getItem('userName').length > 0 ){
    return (
      <div className="signup_page_body">
        <div className="signup_box ">
          <h2>Sign In / Sign Up</h2>
            <label>Welcome, {sessionStorage.getItem('userName')}</label>
            <br></br>
            <button onClick={handleLogoutClick}>Logout</button>
          </div>    
      </div>
    );  
  }
  else{
    return (
      <div className="signup_page_body">
        <div className="signup_box ">
          <h2>Sign In / Sign Up</h2>
            <label>User Name</label>
            <input className = 'input_textbox' type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            <label>Password</label>
            <input className='input_textbox' type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            {loginError && <p className="login-error">{loginError}</p>}
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleCreateAccountClick}>Create account</button>
          </div>    
      </div>
    );
  }
};
export default SignInUp;