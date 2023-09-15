import {departamentos} from '@/assets/departamentos';
import {objetivoEmpresa} from '@/assets/objetivoEmpresa';
import Section from '@/components/Section';
import Titulo from '@/components/header-footer/Titulo';
import AtributosEmpresa from '@/components/sobre/AtributosEmpresa';
import React from 'react';

const page = () => {
  return (
    <main className="mx-auto min-h-fit flex flex-col">
      <Titulo tamanho="5xl" alinhamento="center">
        Sobre
      </Titulo>
      <Section>
        <div className="container mx-auto flex flex-col md:flex-row gap-4 p-4 ">
          {objetivoEmpresa.map((atributo) => (
            <AtributosEmpresa {...atributo} key={atributo.titulo} />
          ))}
        </div>
      </Section>
      <Section cor="bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-yellow-50">
        <Titulo alinhamento="center" tamanho="4xl">
          NOSSA EQUIPE
        </Titulo>
        <div className="container mx-auto flex flex-wrap md:flex-row gap-4 p-4 ">
          {departamentos.map((atributo) => (
            <AtributosEmpresa {...atributo} key={atributo.titulo} />
          ))}
        </div>
      </Section>
      <Section>
        <Titulo alinhamento="center" tamanho="4xl">
          NOSSA HISTÓRIA
        </Titulo>
      </Section>
    </main>
  );
};

export default page;
