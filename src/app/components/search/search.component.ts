import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { QueryOptions } from '../../configs/queryOptions.config';

import { SearchDataService } from '../../services/searchService';
import { ApiService } from '../../services/apiService';

@Component({
    selector: 'athena-search',
    templateUrl: 'search.template.html',
    styleUrls: ['./../../css/search.css'],
    providers: [ApiService]
})

export class SearchComponent {

    // Define search values
    drug:string = '';
    disease:string = '';
    org:string = '';
    exp:string = '';

    // Need to figure better way for doing this
    invalidForm = false;
    onSubmit = false;
    btnText = 'Search';


    // Constructor
    constructor(private router:Router,
                private searchService:SearchDataService,
                private apiService:ApiService) {
    }

    public query = '';

    public drugs = QueryOptions.drugs;
    public diseases = QueryOptions.diseases;
    public orgs = QueryOptions.orgs;
    public exps = QueryOptions.exp;

    /**
     * Fetches data from NCBI DB for user entered values. Redirects user to
     * search results screen once data is available
     */
    getSearchResult():void {

        if (this.onSubmit) return;

        // if no value selected for drug or disease
        if (!this.drug && !this.disease) {
            this.invalidForm = true;
            return;
        }

        this.onSubmit = true;
        this.btnText = 'Loading';

        //console.log('drug ' + this.drug + ' disease ' + this.disease + ' org ' + this.org + ' exp ' + this.exp);

        const searchObj = {
            drug: this.drug,
            disease: this.disease,
            org: this.org,
            exp: this.exp
        };

        this.apiService
            .searchNCBI(searchObj)
            .then((data)=> {
                console.log(data);
                this.searchService.generateResult(data);
                this.router.navigate(['/search-result']);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
                this.onSubmit = false;
                this.btnText = 'Search';
            });
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

            default:
                break;
        }
    }

}
