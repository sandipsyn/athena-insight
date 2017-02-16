import { Injectable }    from '@angular/core';


@Injectable()
export class SearchDataService {

    // variable for storing searched results
    searchResult = [];

    // resultType
    resultType = '';

    //query
    queryFor = '';

    // variable for storing selections made by user
    selectedData = [];

    // Returns processed search result
    getSearchResult():any {
        return this.searchResult;
    }

    // generates search result from response of eUtils API
    generateResult(searchResult):any {
        // Todo - Remove following condition which is added to show fixed data for
        // few queries
        if (searchResult.type && searchResult.type === `fixedResponse`) {
            this.searchResult = searchResult.data;
            this.resultType = 'fixedResult';
            this.queryFor = searchResult.queryFor;
        } else {
            this.searchResult = this.processData(searchResult.eSummaryResult.DocSum);
            this.resultType = '';
        }
    }

    // Processes eUtils response data and converts it to format required to
    // display in table
    processData(dataSet):any {
        let processedResult = [];

        for (let i = 0; i < dataSet.length; i++) {

            let result = this.retrieveData(dataSet[i]);

            let requiredResult = {
                GSE: result.Accession,
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
    retrieveData(data):any {
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

    /**
     * Returns data selected by user for analysis
     * @return {Array}
     */
    getUserSelection() {
        if (this.resultType === 'fixedResult') {
            let result = [{
                type: 'fixedResult',
                data: this.queryFor
            }];

            this.selectedData = result;
        }

        return this.selectedData;
    }
}
