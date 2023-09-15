import Image from 'next/image';
import React from 'react';
import style from '@/scss/Intro.module.scss';
const Intro = () => {
  return (
    <section>
      <div className={`${style.imagemFundo}`}>
        <div className="container mx-auto flex flex-col justify-center items-center h-screen">
          <div className="backdrop-blur-md p-10 rounded-full">
            <p className="text-white my-8 text-4xl text-center">
              Sua impressão com qualidade
            </p>
            <Image
              alt="Universo Toner"
              src={'/logo-uni-branca.png'}
              priority
              width={800}
              height={480}
            />
            <p className="text-white uppercase my-8 text-2xl font-black text-center">
              especialista em venda de TONER COMPATÍVEL e CHIPS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
