"use client"

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {z} from 'zod';

import Logo120 from '../../../public/assets/Logo120x120.png';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>

const login = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema)
    });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data)
    window.location.href = '/athlete';
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
            {...register("email")}
            type="email"
            className="h-12 w-96 px-4  mt-6  rounded-lg text-lg" 
            placeholder="123@gymme.com.br" 
            />
            {errors.email && 
              (<div className='text-red-500'>{errors.email.message}</div>
            )}
            <input 
            type="password" 
            {...register("password")}
            className="h-12 w-96 px-4  mt-6  rounded-lg text-lg" 
            placeholder="Digite sua senha" 
            />
            {errors.password && 
              (<div className='text-red-500'>{errors.password.message}</div>
            )}
            <button 
            className="bg-blue-500 text-white h-12 w-96 rounded-lg text-lg mt-12"
            type="submit"
            disabled={isSubmitting}>
                {isSubmitting ? "Carregando..." : "Confirmar" }
            </button>
          </form>
        </div>
    );
};

export default login;