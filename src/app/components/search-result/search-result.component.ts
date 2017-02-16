import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchDataService } from '../../services/searchService';
import { ApiService } from '../../services/apiService';

@Component({
    selector: 'search-result',
    templateUrl: 'search-result.template.html',
    styleUrls: ['./../../css/result.css']
})

export class SearchResultComponent {

    searchQuery = this.apiService.searchQuery;

    resultData = this.searchService.getSearchResult();

    // Search Result constructor
    constructor(private router:Router,
                private searchService:SearchDataService,
                private apiService:ApiService) {
        this.getData();
    }

    /**
     * Check search result, checks if data exists
     */
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
