import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HorarioFuncionamento from './info-footer/HorarioFuncionamento';
import Endereco from './info-footer/Endereco';
import Mapa from './info-footer/Mapa';

const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="bg-cyan-400 p-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-evenly items-center flex-wrap ">
          <Image
            alt="Universo Toner"
            src={'/logo.jpg'}
            width={400}
            height={240}
          />

          <HorarioFuncionamento />

          <Endereco />

          <Mapa />
        </div>
      </div>
      <div className="bg-black p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="">
            <p className="text-sm text-white">
              ©{new Date().getFullYear()} Universo Toner Ltda Todos os direitos
              reservados
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-gray-100 text-sm">
              Desenvolvido por{' '}
              <Link
                className=" text-base hover:text-fuchsia-400 text-cyan-400"
                href={'https://github.com/SamuelMBote'}
              >
                SamuelMBote
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
