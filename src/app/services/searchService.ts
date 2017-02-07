import { Injectable }    from '@angular/core';

// import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  searchResult = [];

  // Returns processed search result
  getSearchResult(): any {
    return this.searchResult;
  }

  // generates search result from response of eUtils API
  generateResult(searchResult): any {
    this.searchResult = this.processData(searchResult.eSummaryResult.DocSum);
  }

  // Processes eUtils response data and converts it to format required to
  // disaply in table
  processData(dataSet): any {
    let processedResult = [];

    for (let i = 0; i < dataSet.length; i++) {

      let result = this.retrieveData(dataSet[i]);

      let requiredResult = {
        GSE_ACC: result.Accession,
        Title: result.title,
        GSM_Count: result.n_samples,
        Summary: result.summary,
        Update_Date: result.PDAT
        //Overall_Design: ''
      };

      processedResult.push(requiredResult);
    }

    return processedResult;
  }

  /**
   * Process single object to get required values
   */
  retrieveData(data): any {
    let result = {};

    result['Id'] = data.Id;

    for (var i = 0; i < data.Item.length; i++) {
      let value = data.Item[i]["_"];
      if (value) {
        let property = data.Item[i].$.Name;
        result[property] = value;
      }
    }

    return result;
  }
}
