import {objetivoEmpresa} from '@/assets/objetivoEmpresa';
import AtributosEmpresa from '@/components/sobre/AtributosEmpresa';
import Intro from '@/components/Intro';
import Titulo from '@/components/header-footer/Titulo';
import Section from '@/components/Section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-fit">
      <Intro />
      <Section>
        <Titulo alinhamento="text-center" tamanho="text-3xl">
          Nosso Objetivo
        </Titulo>
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-10  p-4 ">
          {objetivoEmpresa.map((atributo) => (
            <AtributosEmpresa {...atributo} key={atributo.titulo} />
          ))}
        </div>
      </Section>
      <Section cor="bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-yellow-50">
        <div className="container mx-auto flex flex-col md:flex-row   p-4 space-x-10">
          <div className="basis-1/3 flex flex-col justify-center items-center">
            <Image
              className="mb-4"
              alt="Cartucho"
              width={220}
              height={140}
              src={'/bola-2.png'}
            />
            <p className="uppercase  text-center text-lg font-semibold">
              cartucho novo compativel, mais barato que recarga!
            </p>
          </div>
          <div className="basis-1/3 flex flex-col justify-center items-center">
            <Image
              className="mb-4"
              alt="Cartucho"
              width={220}
              height={140}
              src={'/bola-4.png'}
            />
            <p className="uppercase text-center text-lg font-semibold">
              melhor custo benefício para você e sua impressora!
            </p>
          </div>
          <div className="basis-1/3 flex flex-col justify-center items-center">
            <Image
              className="mb-4"
              alt="Cartucho"
              width={220}
              height={140}
              src={'/bola-6.png'}
            />
            <p className="uppercase text-center text-lg font-semibold">
              profissionais qualificados para oferecer sempre o melhor para
              você!
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

