import React from 'react';
type ITituloProps = React.ComponentProps<'h2'> & {
  alinhamento: 'right' | 'left' | 'center';
  tamanho: '5xl' | '4xl' | '3xl' | '2xl' | 'xl';
};
const Titulo = ({alinhamento, tamanho, children, ...props}: ITituloProps) => {
  return (
    <div className="p-4">
      <h2
        className={`container mx-auto font-serif subpixel-antialiased uppercase ${`text-${alinhamento} text-${tamanho}`}`}
        {...props}
      >
        {children}
      </h2>
    </div>
  );
};

export default Titulo;
