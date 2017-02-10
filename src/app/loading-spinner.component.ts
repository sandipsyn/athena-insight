import { Component } from '@angular/core';

@Component({
    selector: `loading-spinner`,
    template: `<div class="loading">
    <h3><i class="fa fa-2x fa-spinner fa-spin"></i>  Processing&#8230;</h3>
    </div>`
})

export class LoadingSpinnerComponent {}