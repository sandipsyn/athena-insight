import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { SearchDataService } from './../../services/searchService';


@Component({
    selector: 'data-table',
    templateUrl: 'data-table.template.html'
})

export class DataTableComponent implements OnChanges, OnInit {

    // Table column headers
    headings;
    selectedIndices = [];

    constructor(private dataService:SearchDataService) {
    }

    // Input for table data
    @Input()
        tableData:any = [
            {
                'Name': 'Aryabhatt',
                'Launch Year': 1975,
                'Launch Vehicle': 'u-11 Interkosmos'
            }
        ];

    @Input()
        selectable = false;

    ngOnChanges(changes) {
        // Extract headings from Object to be used as table heading
        this.headings = this.tableData && this.tableData[0] && Object.keys(this.tableData[0]);
    }

    ngOnInit() {
        this.dataService.selectedData = [];
    }

    /**
     * Creates new data set of selected
     * @param ind
     * @param event
     */
    updateSelection(ind, event) {
        console.log(event.type);

        let index = this.selectedIndices.indexOf(ind);

        // If object already present remove it from array
        // els push it to array
        if (index > -1) {
            this.selectedIndices.splice(index, 1);
            this.dataService.selectedData.splice(index, 1);
        } else {
            this.selectedIndices.push(ind);
            this.dataService.selectedData.push(this.tableData[ind]);
        }
    }
}
