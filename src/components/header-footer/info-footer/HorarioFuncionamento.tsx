'use client';
import React from 'react';

const HorarioFuncionamento = () => {
  const [openShop, setOpenShop] = React.useState<{
    open: boolean;
    message: string;
    color: 'text-yellow-500' | 'text-red-600' | 'text-white';
  } | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const interval = setInterval(openOrClosed, 3 * 1000);
    return () => clearInterval(interval);
  }, []);

  function openOrClosed(): void {
    const now: Date = new Date();
    const hours: number = now.getHours();
    const minutes: number = now.getMinutes();
    const day: number = now.getDay();

    if (day === 0 || day === 6) {
      setOpenShop({open: false, message: 'Fechado', color: 'text-red-600'});
    } else if (hours < 8 || hours >= 18 || (hours === 17 && minutes >= 30)) {
      setOpenShop({open: false, message: 'Fechado', color: 'text-red-600'});
    } else if (hours === 17 && minutes > 0 && minutes < 30) {
      setOpenShop({
        open: true,
        message: 'Fecha em breve',
        color: 'text-yellow-500',
      });
    } else {
      setOpenShop({open: true, message: 'Aberto', color: 'text-white'});
    }
    setLoading(false);
  }

  return (
    <div className={`flex flex-col justify-around items-center`}>
      <p className="uppercase text-sm font-black font-serif">
        Horário de Funcionamento
      </p>
      <p>De Seg. a Sex. das 8h00 às 17h30</p>
      {loading ? (
        <p className="capitalize  text-center">Carregando...</p>
      ) : (
        <p
          className={`${openShop?.color} capitalize text-xl font-medium font-mono  text-center`}
        >
          {openShop && openShop.message}
        </p>
      )}
    </div>
  );
};

export default HorarioFuncionamento;
