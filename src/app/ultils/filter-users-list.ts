import { isWithinInterval } from "date-fns";
import { User } from "../interfaces/user/user.interface";
import { FilterSelectOptions } from "../interfaces/user/filtros/filterSelect";

const filterUserListByName = (name: string | undefined, userList: User[]): User[] => {
    const NAME_NOT_TYPED = name === undefined;
    if (NAME_NOT_TYPED) {
        return userList;
    }
    const filteredList = userList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
}

const filterUserListByStatus = (status: boolean | undefined, userList: User[]): User[] => {
    const STATUS_NO = status === undefined;
    if (STATUS_NO) {
        return userList;
    }
    const filteredList = userList.filter((user) => user.ativo === status);
    return filteredList;
}

const filterUserListByDate = (startDate: Date | undefined, endDate: Date | undefined, userList: User[]): User[] => {
    const DATE_NO = startDate === undefined || endDate === undefined;

    if (DATE_NO) {
        return userList;
    }

    const checkDate = (user: User) => isWithinInterval(new Date(user.dataCadastro),
        {
            start: startDate,
            end: endDate,
        });

    const filteredList = userList.filter(checkDate);
    return filteredList
}

  const filterUsersListe = (filterOptions: FilterSelectOptions, userList: User[]): User[] => {
    let filteredList: User[] = userList;
     

      filteredList = filterUserListByName(filterOptions.name, userList);
      filteredList = filterUserListByStatus(filterOptions.status, filteredList);
      filteredList = filterUserListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
      
    return filteredList;
  }

  export {filterUsersListe};