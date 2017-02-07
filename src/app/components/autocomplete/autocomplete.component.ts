import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'autocomplete-input',
  template: `
  <label> {{label}} </label>

  <input #searchbox type="text" class="form-control"
    [name]="name"
    [placeholder]="placeholder"
    [(ngModel)]=query
    (keyup)="filter($event)"/>

  <div class="suggestions" *ngIf="filteredList.length > 0">
    <ul>
      <li *ngFor="let item of filteredList">
        <a (click)="select(item)">{{item}}</a>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./../../css/search.css']
})

export class AutocompleteComponent implements OnChanges{

  query = '';

  @Input() data: any;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() label: String;
  @Input() disabled = false;

  // Send result back to parent component
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  // Implement ngOnChange event
  ngOnChanges(changes) {
    // this.disabled ? input.setAttribute('disabled') : null;
  }

  filteredList = [];

  /**
   * Function to filter array contents
   */
  filter(e) {
    // On ESC key close autocomplete
    if (e.keyCode === 27) this.query = "";

    if (this.query !== "") {
      // Filter names from array which has typed text
      this.filteredList = this.data.filter( el =>
        el.toLowerCase().indexOf(this.query.toLowerCase()) > -1
      )
    } else {
      this.filteredList = [];
    }
  }

  /**
   * Select item from autocomplete list
   */
  select(item) {
    this.query = item;
    this.filteredList = [];
    this.change.emit(this.query);
  }
}
