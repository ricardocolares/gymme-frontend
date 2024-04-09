import React from "react";

import Header from "./components/header";
import LpImg1 from "../../public/assets/LpImg1.svg";
import LpImg2 from "../../public/assets/LpImg2.svg";
import LpImg4 from "../../public/assets/LpImg4.svg";

export default function Home() {
  return (
    <div className="bg-backgroundPurple min-h-screen">
      <Header />
      <div className="grid gap-8 lg:grid-cols-1">
        <div className="flex items-center justify-center lg:justify-start">
          <img src={LpImg1.src} alt="logo 1" className="w-32 lg:w-64 h-36 lg:h-48 mr-4 lg:mr-0 lg:ml-48 lg:pl-12" />
          <p className="text-base lg:text-3xl lg:w-full lg:ml-6 lg:mr-80 lg:pr-12 text-justify text-white">Treinamentos para melhorar sua vida fitness em um único lugar.</p>  
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <img src={LpImg2.src} alt="logo 2" className="w-32 lg:w-64 h-36 lg:h-48 mr-4 lg:mr-0 lg:ml-48 lg:pl-12" />
          <p className="text-base lg:text-3xl lg:w-full lg:ml-6 lg:mr-80 lg:pr-12 text-justify text-white">Acompanhamento personalizado e individual do seu treino. Um novo jeito de ter um Personal Trainer</p>  
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <img src={LpImg4.src} alt="logo 3" className="w-32 lg:w-64 h-36 lg:h-48 mr-4 lg:mr-0 lg:ml-48 lg:pl-12" />
          <p className="text-base lg:text-3xl lg:w-full lg:ml-6 lg:mr-80 lg:pr-12 text-justify text-white">Acompanhe em tempo real as suas atividades feitas com filtros de tempo e região trabalhada</p>  
        </div>
      </div>
    </div>
  );
}
