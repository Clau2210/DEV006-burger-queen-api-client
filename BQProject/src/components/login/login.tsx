/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { login } from '../../api/login';
import ImageLogo from '../../assets/images/Bq.png'
import '@fontsource/atma'

function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    }

  

    const handleLogin = async (e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault() 
      console.log('email: ' + email);
      console.log('password: ' + password);
     
      try {
        setErrorMessage('');
        const resp = await login(email, password);        
        //console.log('Response data:', resp.data);
        //const user = resp.data.user;
        //console.log('user:', user);
        //const role = user.role;
        //console.log('role: ', role);
        navigate('/waiterBreakfast');
      } catch (e) {
        //alert("mal echo")
        setErrorMessage("login incorrecto");
      }
    }

    return(
      <>
      <div className='flex flex-col  justify-center p-40 lg:px-8 bg-[#292D32]' >
        <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="my-0 w-[250px] justify-center"
            src={ImageLogo}
            alt="Burguer Queen"
          />
          <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-white font-[atma]">
            INICIAR SESIÓN
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white font-[atma]">
                Correo
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='email@email.com'
                  autoComplete="email"
                  required
                  className="bg-white block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  onChange={handleEmailChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white font-[atma]">
                  Contraseña
                </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Tu contraseña'
                  autoComplete="current-password"
                  required
                  className="bg-white placeholder-shown:border-gray-500 p-2 block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  onChange={handlePasswordChange}
                />
                <label htmlFor="" className='text-red-700'>{errorMessage}</label>
              </div>
            </div>

            <div>
              <button
                className="flex justify-center mx-auto w-1/2 rounded-full bg-[#EE4D39] px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-yellow-500 font-[atma] font-bold" 
                onClick= {handleLogin}
              >
                INGRESAR
              </button>
            </div>
          </form>

        </div>
      </div>
      </>
    );
}

export default Login