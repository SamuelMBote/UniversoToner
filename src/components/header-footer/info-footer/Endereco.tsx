import {contato} from '@/assets/contato';
import React from 'react';
import Mapa from './Mapa';

const Endereco = () => {
  return (
    <div className={`flex flex-col justify-around items-center`}>
      <p className="uppercase text-sm font-black font-serif">Endereço</p>
      <p className="capitalize text-center">{`${contato.endereco.logradouro}, ${contato.endereco.numero} - Bairro ${contato.endereco.bairro}`}</p>
      <p className="capitalize  text-center">{`${contato.endereco.cidade} - ${contato.endereco.uf} - ${contato.endereco.cep}`}</p>
    </div>
  );
};

export default Endereco;
