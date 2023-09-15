import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HorarioFuncionamento from './info-footer/HorarioFuncionamento';
import Endereco from './info-footer/Endereco';
import Mapa from './info-footer/Mapa';

const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className=" bg-cyan-400 p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap space-x-10 space-y-10 items-center ">
            <div className="md:basis-1/2 lg:basis-1/2 xl:basis-1/4 ">
              <Image
                alt="Universo Toner"
                src={'/logo.jpg'}
                width={400}
                height={240}
              />
            </div>
            <div className="md:basis-2/2 lg:basis-2/2 xl:basis-1/4 ">
              <HorarioFuncionamento />
            </div>
            <div className="md:basis-4/12 lg:basis-4/12 xl:basis-1/4 ">
              <Endereco />
            </div>
            <div className="md:basis-6/12 g:basis-6/12 xl:basis-1/4 ">
              <Mapa />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-2">
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
