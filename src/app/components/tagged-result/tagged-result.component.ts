import { Component } from '@angular/core';
import { QueryOptions } from '../../configs/queryOptions.config';

import { ApiService } from '../../services/apiService';

@Component({
  selector: 'tagged-result',
  templateUrl: 'tagged-result.template.html',
  styleUrls: ['./../../css/result.css'],
  providers: [ApiService]
})

export class TaggedResultComponent {
  inProgress: Boolean;
  progressValue: number;
  taggedResult = QueryOptions.taggedResult;

  constructor(private apiService: ApiService) {
    this.inProgress = true;
    this.progressValue = 0;

    const progress = setInterval(() => {

      if (this.progressValue === 100) {
        clearInterval(progress);
        this.inProgress = false;
      }

      this.progressValue += 5;

    }, 500);

    this.apiService.getTaggedResult()
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
