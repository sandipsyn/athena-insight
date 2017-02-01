import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { QueryData } from '../../queryData';

@Component({
  selector: 'athena-search',
  templateUrl: 'search.template.html',
  styleUrls: ['./../../css/search.css']
})

export class SearchComponent {

  constructor(
    private router: Router
  ) { }

  public query = '';
  public drugs = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus",
    "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
    "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
    "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta",
    "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland",
    "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
    "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];

  public filteredList = [];
  searchObj: any;

  // constructor(myElement: ElementRef) {
  //   this.elementRef = myElement;
  // }

  filter() {
    if (this.query !== "") {
      this.filteredList = this.drugs.filter(function(el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  getResult() : void {
    this.router.navigate(['/search-result']);
  }

}
