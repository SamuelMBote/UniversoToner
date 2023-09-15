import React from 'react';
type ITituloProps = React.ComponentProps<'h2'> & {
  alinhamento: 'text-right' | 'text-left' | 'text-center';
  tamanho: 'text-5xl' | 'text-4xl' | 'text-3xl' | 'text-2xl' | 'text-xl';
};
const Titulo = ({alinhamento, tamanho, children, ...props}: ITituloProps) => {
  return (
    <div className="p-4">
      <h2
        className={`container mx-auto font-serif subpixel-antialiased uppercase ${alinhamento} ${tamanho}`}
        {...props}
      >
        {children}
      </h2>
    </div>
  );
};

export default Titulo;
