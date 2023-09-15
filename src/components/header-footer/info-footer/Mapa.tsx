import React from 'react';

const Mapa = () => {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14645.73869514228!2d-46.374306101120766!3d-23.408660224594144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce87f97d57ba9d%3A0xe7d74281511dd875!2sAv.%20Osaka%2C%20681%20-%20Centro%20Industrial%2C%20Aruj%C3%A1%20-%20SP%2C%2007432-575!5e0!3m2!1spt-BR!2sbr!4v1693428263621!5m2!1spt-BR!2sbr"
        width="400"
        height="240"
        className="border-none"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Mapa;
