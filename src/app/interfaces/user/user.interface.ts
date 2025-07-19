import { Address } from "./address.interface";
import { Status } from "./status.interface";

export interface User {
    nome: string;
    email: string;
    senha: string;
    idade: string;
    endereco: Address;
    telefone: string;
    ativo: boolean; 
    funcao: string;
    dataCadastro: string;   
    status: Status;    
}