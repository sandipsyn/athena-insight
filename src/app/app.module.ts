import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing module
import { AppRoutingModule } from './app.routing.module';

// Components
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

// Services
import { SearchDataService } from './services/searchService';
import { ApiService } from './services/apiService';

// Pipes
import { TransformToLink } from './pipes/transformToLink.pipe';
import { HighlightText } from './pipes/textHighlighter.pipe';

enableProdMode();

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
        LoadingSpinnerComponent,
        TransformToLink,
        HighlightText
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
