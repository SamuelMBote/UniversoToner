import Titulo from '@/components/header-footer/Titulo';
import React from 'react';

const page = () => {
  return (
    <main className="mx-auto min-h-fit flex flex-col">
      <Titulo alinhamento="right" tamanho="5xl">
        Produtos
      </Titulo>
    </main>
  );
};

export default page;
