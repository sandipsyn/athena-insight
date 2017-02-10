import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchDataService } from '../../services/searchService';

@Component({
    selector: 'search-result',
    templateUrl: 'search-result.template.html',
    styleUrls: ['./../../css/result.css']
})

export class SearchResultComponent {

    resultData = this.searchService.getSearchResult();

    constructor(private router:Router,
                private searchService:SearchDataService) {
        this.getData();
    }

    getData() {
        if (this.resultData.length < 1) {
            this.router.navigate(['/']);
        }
    }

    /**
     * Redirect user to tagged results screen
     */
    getTaggedResult():void {
        this.router.navigate(['/result']);
    }
}
