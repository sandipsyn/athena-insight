import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { TaggedResultComponent } from './components/tagged-result/tagged-result.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { LoadingSpinnerComponent } from './loading-spinner.component';

import { SearchDataService } from './services/searchService';
import { ApiService } from './services/apiService';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SignInComponent,
        SearchComponent,
        SearchResultComponent,
        TaggedResultComponent,
        AutocompleteComponent,
        DataTableComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [SearchDataService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
