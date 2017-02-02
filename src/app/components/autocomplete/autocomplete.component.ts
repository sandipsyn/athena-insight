import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'autocomplete-input',
  template: `
  <label> {{label}} </label>

  <input type="text" class="form-control" [name]="name" [placeholder]="placeholder"
   [(ngModel)]=query (keyup)="filter()"/>

  <div class="suggestions" *ngIf="filteredList.length > 0">
    <ul *ngFor="let item of filteredList">
      <li>
        <a (click)="select(item)">{{item}}</a>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./../../css/search.css']
})

export class AutocompleteComponent {

  public query = '';

  @Input()
  data: any;

  @Input()
  placeholder: string;

  @Input()
  name: string;

  @Input()
  label: String;

  // Send result back to parent component
  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  public filteredList = [];

  /**
   * Function to filter array contents
   */
  filter() {
    if (this.query !== "") {
      // Filter names from array which has typed text
      this.filteredList = this.data.filter( el =>
        el.toLowerCase().indexOf(this.query.toLowerCase()) > -1
      )
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
    this.change.emit(this.query);
  }
}
