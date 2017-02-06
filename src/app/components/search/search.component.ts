import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QueryOptions } from '../../configs/queryOptions.config';

@Component({
  selector: 'athena-search',
  templateUrl: 'search.template.html',
  styleUrls: ['./../../css/search.css']
})

export class SearchComponent {

  // Define search values
  drug: string = '';
  disease: string = '';
  org: string = '';
  exp: string = '';

  // Constructor
  constructor(private router: Router) { }

  public query = '';

  public drugs = QueryOptions.drugs;
  public diseases = QueryOptions.diseases;
  public orgs = QueryOptions.orgs;
  public exps = QueryOptions.exp;

  public search(): any {
    // It will return ncbi eutils object to make search.
    return require("ncbi-eutils");
  }

  // Need to get results from NCBI-DB and disaply it in tabular form
  getResult(): void {
    var Eutils = this.search();

    console.log('drug ' + this.drug + ' disease ' + this.disease + ' org ' + this.org + ' exp ' + this.exp);
    // Ex of Eutils search.
    // Eutils.esearch({
    //   db: 'gene',
    //   term: 'drugs',
    //   field: 'vitamin A',
    //   retmax: 20,
    //   restart: 2
    // })
    // .then((d) => console.log(d));

    //   Eutils.esearch({
    //     db: 'gene',
    //     term: 'drugs',
    //     field: 'vitamin A',
    //     retmax: 1,
    //     restart: 21
    //   })
    //   .then(Eutils.esummary())
    //   .then((d)=> console.log(d));
    //

    // Eutils.esearch({
    //   db: 'gene',
    //   term: 'foxp2[sym] AND human[orgn]'
    // })
    // .then((d) => console.log(d));

    // Eutils.esearch({
    //   db:'gene',
    //   term: 'ltf[sym] AND human[orgn]'
    // })
    // .then(Eutils.efetch)
    // .then((d)=> {
    //   console.log(d);
    //   this.router.navigate(['/search-result']);
    // })

    this.router.navigate(['/search-result']);
  }

  diseaseValueChange(value) {
    this.disease = value;
  }

  drugValueChange(value) {
    this.drug = value;
  }

  onOptionSelection(type, value) {
    switch (type) {
      case 'org':
        this.org = value;
        break;

      case 'exp':
        this.exp = value;
        break;

      default: break;
    }
  }

}
