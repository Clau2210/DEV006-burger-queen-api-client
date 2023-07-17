import { useState } from 'react';
import './login.css';
import { login } from '../../api/login';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    }

    const handleLogin = async () => {
      console.log('email: ' + email);
      console.log('password: ' + password);
      try {
        const resp = await login(email, password);
        setErrorMessage('');
        alert('login correcto' + resp.data.accessToken);
      } catch (e) {
        //alert("mal echo")
        setErrorMessage("login incorrecto");
      }
    }

    return(
      <div className='login'>
        <div className='loginBox'>
        <div className='loginHeader'>Login</div>
        <div className='inputs'>
          <input className='email' placeholder='Enter your email' onChange={handleEmailChange}/>
          <input 
            className='password' 
            placeholder='Enter your password'
            type='password'
            onChange={handlePasswordChange}
          />
          </div>
          <div style={{display:'flex', justifyContent: 'center'}}>
            {errorMessage}
            <button className='submitbutton' onClick={handleLogin} >Login</button>
          </div>
         </div>
        </div>
    );
}

export default Login