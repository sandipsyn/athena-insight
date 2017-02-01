import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
  selector: 'search-result',
  templateUrl: 'search-result.template.html',
  styleUrls: ['./../../css/result.css']
})

export class SearchResultComponent {
  constructor(
    private router: Router
  ) { }

  getTaggedResult() :void {
    this.router.navigate(['/result']);
  }
}
