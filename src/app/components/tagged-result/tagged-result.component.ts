import { Component } from '@angular/core';
//import { QueryOptions } from '../../configs/queryOptions.config';

import { ApiService } from '../../services/apiService';
import { SearchService } from '../../services/searchService';

@Component({
  selector: 'tagged-result',
  templateUrl: 'tagged-result.template.html',
  styleUrls: ['./../../css/result.css'],
  providers: [ApiService]
})

export class TaggedResultComponent {
  inProgress: Boolean;
  progressValue: number;

  taggedResult = this.searchService.getSearchResult();

  constructor(private apiService: ApiService,
              private searchService: SearchService) {
    this.inProgress = true;
    this.progressValue = 0;

    const progress = setInterval(() => {

      if (this.progressValue === 100) {
        clearInterval(progress);
        this.inProgress = false;
      }

      this.progressValue += 5;

    }, 500);

    this.apiService.getTaggedResult(this.taggedResult)
      .then((data) => {
        this.taggedResult = data;
        clearInterval(progress);
        this.inProgress = false;
      })
      .catch((err) => {
        console.log('Error fetching data')
      })
  }

}
