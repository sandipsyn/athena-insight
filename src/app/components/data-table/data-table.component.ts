import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: 'data-table.template.html'
})

export class DataTableComponent implements OnChanges {

  headings;

  @Input()
  tableData: any = [
    {
      'Name': 'Aryabhatt',
      'Launch Year': 1975,
      'Launch Vehicle': 'u-11 Interkosmos'
    }
  ];

  ngOnChanges(changes) {
    // Extract headings from Object to be used as table heading
    this.headings = this.tableData && this.tableData[0] && Object.keys(this.tableData[0]);
  }

}
