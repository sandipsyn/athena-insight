import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../services/searchService';

@Component({
  selector: 'search-result',
  templateUrl: 'search-result.template.html',
  styleUrls: ['./../../css/result.css']
})

export class SearchResultComponent {
  constructor(
    private router: Router,
    private searchService: SearchService
  ) { }

  dummyResult = this.searchService.getSearchResult();

  // console.log('Result', dummyResult);

  getTaggedResult(): void {
    this.router.navigate(['/result']);
  }
}
