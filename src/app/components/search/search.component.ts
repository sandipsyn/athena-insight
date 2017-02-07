import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QueryOptions } from '../../configs/queryOptions.config';

import { SearchService } from '../../services/searchService';

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

  // Need to figure better way for doing this
  invalidForm = false;
  onSubmit = false;
  btnText = 'Search';


  // Constructor
  constructor(private router: Router, private searchService: SearchService) { }

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

    if (this.onSubmit) return;

    // if no value selected for drug or disease
    if (!this.drug && !this.disease) {
      this.invalidForm = true;
      return;
    }

    this.onSubmit = true;
    this.btnText = 'Loading';

    var Eutils = this.search();

    console.log('drug ' + this.drug + ' disease ' + this.disease + ' org ' + this.org + ' exp ' + this.exp);

    Eutils.esearch({ db: 'gds', term: 'chordoma' })
      .then((d) => {
        //supported eutil parameters can be added like this
        d.retstart = 5;
        return Eutils.esummary(d);
      })
      .then((d) => {
        console.log(d);
        this.searchService.generateResult(d);
        this.router.navigate(['/search-result']);
      })
      .catch(function(d) { console.log(d) });
  }

  // event handler for drug value change
  diseaseValueChange(value) {
    this.disease = value;
  }

  // event handler for disease value change
  drugValueChange(value) {
    this.drug = value;
  }

  // Gets called on selection of options from dropdown list
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
