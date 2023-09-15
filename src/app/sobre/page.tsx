import {departamentos} from '@/assets/departamentos';
import {objetivoEmpresa} from '@/assets/objetivoEmpresa';
import Section from '@/components/Section';
import Titulo from '@/components/header-footer/Titulo';
import AtributosEmpresa from '@/components/sobre/AtributosEmpresa';
import React from 'react';

const page = () => {
  return (
    <main className="mx-auto min-h-fit flex flex-col">
      <Titulo tamanho="text-5xl" alinhamento="text-right">
        Sobre
      </Titulo>
      <Section>
        <div className="container mx-auto flex flex-col md:flex-row p-4 space-x-10 ">
          {objetivoEmpresa.map((atributo) => (
            <AtributosEmpresa {...atributo} key={atributo.titulo} />
          ))}
        </div>
      </Section>
      <Section cor="bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-yellow-50">
        <Titulo alinhamento="text-center" tamanho="text-3xl">
          NOSSA EQUIPE
        </Titulo>
        <div className="container mx-auto flex flex-wrap md:flex-row  p-4 space-y-10 ">
          {departamentos.map((atributo) => (
            <AtributosEmpresa {...atributo} key={atributo.titulo} />
          ))}
        </div>
      </Section>
      <Section>
        <Titulo alinhamento="text-center" tamanho="text-3xl">
          NOSSA HISTÓRIA
        </Titulo>
      </Section>
    </main>
  );
};

export default page;
