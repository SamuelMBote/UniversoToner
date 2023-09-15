'use client';
import IAtributo from '@/interfaces/IAtributo';
import React from 'react';

const AtributosEmpresa = (atributo: IAtributo) => {
  const [atributoEmpresa, setAtributoEmpresa] =
    React.useState<IAtributo>(atributo);
  const {titulo, cor, descricao} = atributoEmpresa;
  React.useEffect(() => {
    setAtributoEmpresa(atributo);
  }, [atributo]);
  return (
    <div className=" flex  flex-col ">
      <p
        className={`font-serif text-xl font-semibold subpixel-antialiased uppercase mb-2 `}
      >
        {titulo}
        <span
          className={`font-serif text-xl subpixel-antialiased uppercase content=[' '] block ${cor} w-3/4 h-1.5`}
        >
          {' '}
        </span>
      </p>
      <p>{descricao}</p>
    </div>
  );
};

export default AtributosEmpresa;
