import { Component, EventEmitter, Output } from '@angular/core';
import { FilterSelectOptions } from 'src/app/interfaces/user/filtros/filterSelect';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterOptions: FilterSelectOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };
  statusList = [
    { describe: 'Ativo', value: true },
    { describe: 'Inativo', value: false },
  ];
  @Output('onFilter') onFilterEmitt = new EventEmitter<FilterSelectOptions>();
  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
