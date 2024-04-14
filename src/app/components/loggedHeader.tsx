import React from 'react';
import logo80 from '../../../public/assets/Logo80x80.png';

const LoggedHeader: React.FC = () => {
  return (
    <>        
      <div className="flex flex-wrap items-center bg-backgroundPurple p-4 md:p-12">
        {/* Logo */}
        <img src={logo80.src} alt="logo" className="w-20 h-20 md:w-24 md:h-24 mr-4 md:mr-0" />

        {/* Título */}
        <h1 className="text-white text-3xl md:text-5xl mt-4 md:mt-0 mr-auto md:ml-4">GYMME</h1>

        {/* Botões */}
        <div className="flex items-center justify-end space-x-4 mt-4 md:mt-0">
          <h4 className="flex items-center justify-center bg-blue-400 h-12 p-3 mr-4 md:h-20 w-48 md:w-72 rounded-xl text-white text-lg md:text-3xl">Nome do Atleta</h4>
        </div>
      </div>
    </>
  );
};

export default LoggedHeader;