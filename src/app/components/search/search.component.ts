import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QueryOptions } from '../../configs/queryOptions.config';

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

  public drugs = QueryOptions.drugs;
  public diseases = QueryOptions.diseases;
  public orgs = QueryOptions.orgs;
  public exps = QueryOptions.exp;

  // Need to get results from NCBI-DB and disaply it in tabular form
  getResult() : void {
    this.router.navigate(['/search-result']);
  }

  diseaseValueChange(value) {
    console.log(`Disease ${value}`)
  }

  drugValueChange(value) {
    console.log(`Drug ${value}`);
  }

}
