'use client';
import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';

const FormContato = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.clear();
    console.log(e);
  };
  return (
    <form className="container mx-auto p-4" onSubmit={handleSubmit}>
      <Input label="Nome" placeholder="Nome" name="nome" />
      <Input label="Email" type="email" placeholder="Email" name="email" />

      <Select label="Opcao" name="opcao" id="opcao">
        <option value="cotacao">Cotação</option>
        <option value="reclamacao">Reclamação</option>
        <option value="sugestao">Sugestão</option>
        <option value="agradecimento">Agradecimento</option>
      </Select>

      <Textarea
        placeholder="Mensagem"
        label="Mensagem"
        name="mensagem"
        id=""
        cols={30}
        rows={10}
      />

      <div className="flex flex-row gap-2">
        <button className="rounded-xl bg-cyan-400 px-8 p-4 text-sm text-white font-medium border-cyan-400 border-4 hover:bg-transparent hover:text-cyan-400">
          Enviar
        </button>
        <button className="rounded-xl bg-fuchsia-400  p-4 text-sm text-white font-medium border-fuchsia-400 border-4 hover:bg-transparent hover:text-fuchsia-400">
          Limpar
        </button>
      </div>
    </form>
  );
};

export default FormContato;
