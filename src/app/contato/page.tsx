import {contato} from '@/assets/contato';

import FormContato from '@/components/fom-contato/FormContato';
import Titulo from '@/components/header-footer/Titulo';
import {Metadata} from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {title: 'Contato'};
const page = () => {
  return (
    <main className="min-h-fit flex flex-col ">
      <Titulo alinhamento="right" tamanho="5xl">
        Contato
      </Titulo>
      <section className=" h-max p-4">
        <div className="container mx-auto flex flex-col justify-center items-center gap-4 p-4 ">
          <p className="mb-2 text-xl">
            Se você tem alguma dúvida e precisa de mais informações ou uma
            cotação, entre em contato conosco!
          </p>
          <p className="capitalize text-sm ">Telefones</p>
          <div className="flex gap-2 mb-2">
            {contato.telefones.map((contato) => (
              <Link
                className="hover:text-cyan-400 flex gap-1"
                href={contato.href}
                key={contato.href}
              >
                <span className=" inline text-2xl">{<contato.icon />}</span>
                {contato.title}
              </Link>
            ))}
          </div>

          <p className="capitalize text-sm">WhatsApp</p>
          <Link
            className="hover:text-whatsapp flex gap-1 "
            href={contato.whatsapp.href}
          >
            <span className=" inline text-2xl">
              <contato.whatsapp.icon />
            </span>
            {contato.whatsapp.title}
          </Link>
        </div>

        <FormContato />
      </section>
    </main>
  );
};

export default page;
