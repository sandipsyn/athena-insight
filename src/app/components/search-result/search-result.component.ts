import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QueryOptions } from '../../configs/queryOptions.config';

@Component ({
  selector: 'search-result',
  templateUrl: 'search-result.template.html',
  styleUrls: ['./../../css/result.css']
})

export class SearchResultComponent {
  constructor(
    private router: Router
  ) { }

  dummyResult = QueryOptions.dummyResult;

  getTaggedResult() :void {
    this.router.navigate(['/result']);
  }
}
