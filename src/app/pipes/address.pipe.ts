import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: Address): string {
    const INVALID_ADDRESS =
    !address ||
    !address.rua ||
    !address.bairro ||
    !address.cidade ||
    !address.estado ||
    !address.pais ||
    address.numero === null || address.numero === undefined;

    if(INVALID_ADDRESS){
      return 'Endereço Indisponivel ou Invalido';
    }
    return `${address.rua}, ${address.bairro},${address.cidade}, ${address.bairro}, ${address.cidade}- ${address.estado},${address.pais}`  
  }

}
