"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import LoggedHeader from '../components/loggedHeader';

import beginnerImg from '../../../public/assets/BeginnerWithSub.png';
import intermediateImg from '../../../public/assets/IntermediateWithSub.png';
import advancedImg from '../../../public/assets/AdvancedWithSub.png';

const ListExercises: React.FC = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string>('');

  const handleCheckboxChange = (value: string) => {
    setSelectedCheckbox(value);
  };

  return (
    <>
      <div className="bg-backgroundPurple h-screen">
        <LoggedHeader />
        <div className="flex flex-col items-center bg-backgroundPurple h-screen mt-16">
          <h2 className="text-3xl mb-8 font-extrabold text-white">QUAL SUA EXPERIÊNCIA?</h2>
          <div className="flex">
            <div className="inline-block mr-8 text-xl">
              <input
                id="iniciante"
                type="checkbox"
                checked={selectedCheckbox === 'Iniciante'}
                onChange={() => handleCheckboxChange('Iniciante')}
              />
              <label htmlFor="iniciante" className="text-white">Iniciante</label>
            </div>
            <div className="inline-block mr-4 text-xl">
              <input
                id="intermediário"
                type="checkbox"
                checked={selectedCheckbox === 'Intermediário'}
                onChange={() => handleCheckboxChange('Intermediário')}
              />
              <label htmlFor="intermediário" className="text-white">Intermediário</label>
            </div>
            <div className="inline-block text-xl">
              <input
                id="avançado"
                type="checkbox"
                checked={selectedCheckbox === 'Avançado'}
                onChange={() => handleCheckboxChange('Avançado')}
              />
              <label htmlFor="avançado" className="text-white">Avançado</label>
            </div>
          </div>

          {selectedCheckbox === 'Iniciante' && (
            <div className="mt-8 flex justify-center space-x-16">
              <Link href="/dayA">
                <div className="bg-purple-light relative overflow-hidden hover:brightness-150 hover:scale-110 transition-all duration-300">
                  <img src={beginnerImg.src} alt="" />
                </div>
              </Link>
              <Link href="/dayB">
                <div className="bg-purple-light relative overflow-hidden hover:brightness-150 hover:scale-110 transition-all duration-300">
                  <img src={beginnerImg.src} alt="" />
                </div>
              </Link>
            </div>
          )}

          {selectedCheckbox === 'Intermediário' && (
            <div className="mt-8 flex justify-center space-x-12">
              <Link href="/dayA">
                <div className="bg-purple-light relative overflow-hidden">
                  <img src={intermediateImg.src} alt="" className="hover:brightness-150  hover:scale-110 transition-all duration-300" />
                </div>
              </Link>
              <Link href="/dayB">
                <div className="bg-purple-light relative overflow-hidden">
                  <img src={intermediateImg.src} alt="" className="hover:brightness-150  hover:scale-110 transition-all duration-300" />
                </div>
              </Link>
              <Link href="/dayC">
                <div className="bg-purple-light relative overflow-hidden">
                  <img src={intermediateImg.src} alt="" className="hover:brightness-150  hover:scale-110 transition-all duration-300" />
                </div>
              </Link>
            </div>
          )}

          {selectedCheckbox === 'Avançado' && (
            <div className="mt-8 flex justify-center space-x-8">
              <Link href="/dayA">
                <div className="bg-purple-light relative overflow-hidden">
                  <img src={advancedImg.src} alt="" className="hover:brightness-150  hover:scale-110 transition-all duration-300" />
                </div>
              </Link>
              <Link href="/dayB">
                <div className="bg-purple-light relative overflow-hidden">
                  <img src={advancedImg.src} alt="" className="hover:brightness-150  hover:scale-110 transition-all duration-300" />
                </div>
              </Link>
              <Link href="/dayC">
                <div className="bg-purple-light relative overflow-hidden">
                  <img src={advancedImg.src} alt="" className="hover:brightness-150  hover:scale-110 transition-all duration-300" />
                </div>
              </Link>
              <Link href="/dayD">
                <div className="bg-purple-light relative overflow-hidden">
                  <img src={advancedImg.src} alt="" className="hover:brightness-150  hover:scale-110 transition-all duration-300" />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ListExercises;
