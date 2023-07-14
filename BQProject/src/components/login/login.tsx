import './login.css';

function Login() {

    return(
      <div className='login'>
        <div className='loginBox'>
        <div className='loginHeader'>Login</div>
        <div className='inputs'>
          <input className='email' placeholder='Enter your email'/>
          <input 
          className='password' 
          placeholder='Enter your password'
          type='password'
          />
          </div>
          <div style={{display:'flex', justifyContent: 'center'}}>
            <button className='submitbutton'>Login</button>
          </div>
         </div>
        </div>
    );
}

export default Login