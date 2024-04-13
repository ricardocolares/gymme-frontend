import React from 'react'
import LoggedHeader from '../components/loggedHeader'

import exerciseRecord from '../../../public/assets/exerciseRecord.svg'
import frequencyRecord from '../../../public/assets/frequencyRecord.svg'
import performanceRecord from '../../../public/assets/performanceRecord.svg'
import LpImg1 from '../../../public/assets/LpImg1.svg'

const athlete = () => {
  return (
    <div className="bg-backgroundPurple min-h-screen ">
      <LoggedHeader />
      <div className="text-center mt-2">
      <h1 className="font-bold text-3xl text-white">
        Hoje o seu treino é de <span className="text-yellow-500 text-4xl font-bold">COSTAS E BICEPS</span>
      </h1>
        <div className="flex justify-between mt-8">
          <button type="button" className="relative w-56 h-56 bg-buttonBackground rounded-xl" style={{ marginLeft: '396px', marginRight: 'auto' }}>
            <span className="absolute bottom-1 left-0 right-0 mx-auto font-bold text-xl">FICHAS</span>
            <img src={exerciseRecord.src} className="absolute inset-0 bg-center bg-no-repeat bg-contain ml-6 h-48 w-48"></img>
          </button>
          <button type="button" className="relative w-56 h-56 bg-buttonBackground rounded-xl">
            <span className="absolute bottom-1 left-0 right-0 mx-auto font-bold text-xl">FREQUENCIA</span>
            <img src={frequencyRecord.src} className="absolute inset-0 bg-center bg-no-repeat bg-contain ml-6 h-48 w-48"></img>
          </button>
          <button type="button" className="relative w-56 h-56 bg-buttonBackground rounded-xl" style={{ marginRight: '396px', marginLeft: 'auto' }}>
            <span className="absolute bottom-1 left-0 right-0 mx-auto font-bold text-xl">DESEMPENHO</span>
            <img src={performanceRecord.src} className="absolute inset-0 bg-center bg-no-repeat bg-contain ml-6 h-48 w-48"></img>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8 mb-8">
        <h1 className="font-bold text-3xl text-white text-center">
          Vamos de <span className="text-yellow-500 text-4xl font-bold">CARDIO</span> hoje?
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <button type="button" className="relative w-56 h-56 bg-buttonBackground rounded-xl flex flex-col justify-center items-center">
        <span className="absolute bottom-1 left-0 right-0 mx-auto font-bold text-xl">CARDIO</span>
        <img src={LpImg1.src} className="absolute inset-0 bg-center bg-no-repeat bg-contain ml-6 h-48 w-48"></img>
        </button>
      </div>
    </div>
  );
};

export default athlete