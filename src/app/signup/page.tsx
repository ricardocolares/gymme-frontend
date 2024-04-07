import React from 'react'

import { useForm } from 'react-hook-form';

import Logo120 from '../../../public/assets/Logo120x120.png'



const signup = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-backgroundPurple min-h-screen">
        <img src={Logo120.src} className="pb-16 mb-12"/>
        <h2 className="text-white text-3xl mb-8">Cadastre-se</h2>
        <form className="flex flex-col mb-4">
          <input type="email" id="email" name="email" className="h-12 w-96 px-4  mt-6  rounded-lg text-lg" placeholder="123@gymme.com.br" />
          <input type="password" id="senha" name="senha" className="h-12 w-96 px-4  mt-6  rounded-lg text-lg" placeholder="Digite sua senha" />
          <input type="password" id="confsenha" name="confsenha" className="h-12 w-96 px-4 mt-6 rounded-lg text-lg" placeholder="Confirme sua senha" />
          <button className="bg-blue-500 text-white h-12 w-96 rounded-lg text-lg mt-12">Confirmar</button>
        </form>
      </div>
    );
  };
  
  export default signup;