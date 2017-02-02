import { Component } from '@angular/core';
import { QueryOptions } from '../../configs/queryOptions.config';

@Component({
  selector: 'tagged-result',
  templateUrl: 'tagged-result.template.html',
  styleUrls: ['./../../css/result.css']
})

export class TaggedResultComponent {
  inProgress: Boolean;
  progressValue: number;
  taggedResult = QueryOptions.taggedResult;

  constructor() {
    this.inProgress = true;
    this.progressValue = 0;

    const progress = setInterval(() => {

      if (this.progressValue === 100) {
        clearInterval(progress);
        this.inProgress = false;
      }

      this.progressValue += 5;

    }, 500);
  }

}
