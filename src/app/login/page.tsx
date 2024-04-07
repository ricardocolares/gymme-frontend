import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Logo120 from '../../../public/assets/Logo120x120.png'

type FormFields = {
    email: string;
    password: string;
};

const login = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  }

    return (
      <div className="flex flex-col items-center justify-center bg-backgroundPurple min-h-screen">
          <img src={Logo120.src} className="pb-16 mb-12"/>
          <h2 className="text-white text-3xl mb-8">Login</h2>
          <form 
          className="flex flex-col mb-4"
          onSubmit={handleSubmit(onSubmit)}
          >
            <input 
            {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,

            })}
            type="email"
            className="h-12 w-96 px-4  mt-6  rounded-lg text-lg" 
            placeholder="123@gymme.com.br" 
            />
            <input 
            type="password" 
            {...register("password",{
                required: true,
                minLength: 8,
            })}
            className="h-12 w-96 px-4  mt-6  rounded-lg text-lg" 
            placeholder="Digite sua senha" 
            />
            <button 
            className="bg-blue-500 text-white h-12 w-96 rounded-lg text-lg mt-12"
            type="submit">Confirmar</button>
          </form>
        </div>
    );
};

export default login;