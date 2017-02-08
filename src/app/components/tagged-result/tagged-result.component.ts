import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/apiService';
import { SearchService } from '../../services/searchService';

@Component({
    selector: 'tagged-result',
    templateUrl: 'tagged-result.template.html',
    styleUrls: ['./../../css/result.css'],
    providers: [ApiService]
})

export class TaggedResultComponent {
    inProgress:Boolean;
    progressValue:number;

    progress: any;

    taggedResult = this.searchService.getSearchResult();

    constructor(private router:Router,
                private apiService:ApiService,
                private searchService:SearchService) {
        this.inProgress = true;
        this.progressValue = 0;

        // Fetch data from server
        this.getData();

        this.progress = setInterval(() => {

            if (this.progressValue === 100) {
                clearInterval(this.progress);
                this.inProgress = false;
            }

            this.progressValue += 5;

        }, 500);

    }

    getData() {
        if (this.taggedResult.length < 1) {
            this.router.navigate(['/']);
        } else {
            this.getTaggedResult();
        }
    }

    getTaggedResult() {
        console.time('Node API');
        this.apiService.getTaggedResult(this.taggedResult)
            .then((data) => {
                console.timeEnd('Node API');
                this.taggedResult = data;
                clearInterval(this.progress);
                this.inProgress = false;
            })
            .catch((err) => {
                console.log('Error fetching data')
            })
    }

}
