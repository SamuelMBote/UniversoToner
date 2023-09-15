import IRedeSocial from './IRedeSocial';
import ITelefone from './ITelefone';

export default interface IContato {
  razaoSocial: string;
  endereco: {
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
  };
  telefones: ITelefone[];
  whatsapp: IRedeSocial;
  redesSociais: IRedeSocial[];
}
