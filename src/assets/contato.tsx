import IContato from '@/interfaces/IContato';
import {
  RiWhatsappLine,
  RiFacebookBoxFill,
  RiInstagramLine,
  RiPhoneFill,
  RiCellphoneFill,
} from 'react-icons/ri';

export const contato: IContato = {
  razaoSocial: 'Universo Toner',
  endereco: {
    logradouro: 'Avenida Osaka',
    numero: '681',
    complemento: '',
    cep: '07.411-750',
    bairro: 'Centro Industrial de Arujá',
    cidade: 'Arujá',
    uf: 'SP',
  },
  telefones: [
    {
      href: 'tel:+5511953722043',
      title: '(11) 9 5372 2043',
      icon: RiCellphoneFill,
    },
    {href: 'tel:+551133701327', title: '(11) 3370 1327', icon: RiPhoneFill},
  ],
  whatsapp: {
    href: 'https://api.whatsapp.com/send?phone=+5511953722043&text=Olá, tudo bem?',
    title: '(11) 9 5372 2043',
    icon: RiWhatsappLine,
    color: 'whatsapp',
  },
  redesSociais: [
    {
      href: 'https://api.whatsapp.com/send?phone=+5511953722043&text=Olá, tudo bem?',
      title: '(11) 9 5372 2043',
      icon: RiWhatsappLine,
      color: 'whatsapp',
    },
    {
      href: '/facebook',
      title: 'Facebook',
      icon: RiFacebookBoxFill,
      color: 'facebook',
    },
    {
      href: '/instagram',
      title: 'Instagram',
      icon: RiInstagramLine,
      color: 'instagram',
    },
  ],
};
