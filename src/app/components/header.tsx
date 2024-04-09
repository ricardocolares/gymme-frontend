import React from 'react';
import Link from 'next/link';
import logo80 from '../../../public/assets/Logo80x80.png';

const Header: React.FC = () => {
  return (
    <>        
      <div className="flex flex-wrap items-center bg-backgroundPurple p-4 md:p-12">
        {/* Logo */}
        <img src={logo80.src} alt="logo" className="w-20 h-20 md:w-24 md:h-24 mr-4 md:mr-0" />

        {/* Título */}
        <h1 className="text-white text-3xl md:text-5xl mt-4 md:mt-0 mr-auto md:ml-4">GYMME</h1>

        {/* Botões */}
        <div className="flex items-center justify-end space-x-4 mt-4 md:mt-0">
          <Link href="/signup">
            <h4 className="flex items-center justify-center bg-blue-400 h-12 p-3 mr-4 md:h-20 w-32 md:w-36 rounded-xl text-white text-lg md:text-3xl">Cadastro</h4>
          </Link>
          <Link href="/login">
            <h4 className="flex items-center justify-center bg-white h-12 p-4 md:h-20 w-32 md:w-36 rounded-xl text-black text-lg md:text-3xl">Login</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;