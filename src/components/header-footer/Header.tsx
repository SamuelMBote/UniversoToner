'use client';
import {contato} from '@/assets/contato';
import {routes} from '@/assets/routes';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';

const Header = () => {
  const pathname = usePathname();
  return (
    <nav className="">
      <div className="bg-black">
        <div className="container mx-auto flex flex-row justify-end items-end p-2">
          <div className="flex gap-2">
            {contato.telefones.map(({href, title}) => (
              <Link
                href={href}
                className="text-sm text-cyan-400 hover:text-fuchsia-400 "
                key={href}
              >
                {title}
              </Link>
            ))}
            {contato.redesSociais.map((rede) => (
              <Link
                key={rede.href}
                href={rede.href}
                className={`${
                  rede.color ? `text-${rede.color}` : 'text-yellow-400'
                } hover:text-fuchsia-400 text-2xl`}
              >
                {<rede.icon />}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-yellow-400 p-4">
        <div className="container mx-auto flex flex-row justify-between m-2">
          <Link
            href={'/'}
            className="font-normal hover:font-semibold hover:text-fuchsia-500"
          >
            <Image
              alt="Universo Toner"
              src={'/logo-uni.png'}
              width={150}
              height={0}
            />
          </Link>
          <div className="flex flex-row gap-2 md:gap-6  justify-center items-center ">
            {routes.map((route) => (
              <Link
                className={`font-normal hover:font-semibold hover:text-fuchsia-400 hover:text-xl  ${
                  pathname === route.href ? 'text-cyan-400 text-xl' : ''
                }`}
                key={route.href}
                href={route.href}
              >
                {route.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
