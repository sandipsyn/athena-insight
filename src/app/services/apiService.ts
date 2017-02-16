import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { backendConfig } from './../configs/auth.config';

@Injectable()
export class ApiService {

    // backend API Urls
    private taggedApiUrl = `https://${backendConfig.endpoint}/${backendConfig.getTaggedResult}`;
    private eutilsSearchUrl = `https://${backendConfig.endpoint}/${backendConfig.searchNCBI}`;
    private fileDownloadUrl = `https://${backendConfig.endpoint}/${backendConfig.downloadFile}`;

    public searchQuery = '';

    /**
     * File type for download
     * This value is used for naming files while downloading. By default it is
     * set to 'GSM' which refers to tagged files. In case for search result
     * resultFileType will be 'GSE'. Which can be set while making download
     * request
     */
    public resultFileType = 'GSM';

    constructor(private http:Http) {
    }

    /**
     * Return HTTP promise object with backend API result
     * @param {Object} data - data to be sent to server
     * @return {Object} Promise
     */
    getTaggedResult(data:any):Promise<any> {
        return this.http.post(this.taggedApiUrl, data)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    /**
     * Error handler of HTTP request
     * @return {Obejct | promise}
     */
    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /**
     * Returns promise with NCBI search result
     * @param {Object} searchData - data to be sent to server
     * @return {any|Promise<Promise<any>>}
     */
    searchNCBI(searchData:any):Promise<any> {
        this.searchQuery = searchData.disease || searchData.drug;

        return this.http.post(this.eutilsSearchUrl, searchData)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    /**
     * Makes backend request for file download
     * @param resultData
     * @return {Promise}
     */
    downloadResults(resultData:any, type:string):Promise<any> {
        // If passed use new value for file type
        //
        this.resultFileType = type ? type : this.resultFileType;

        return this.http.post(this.fileDownloadUrl, resultData)
            .toPromise()
            .then(res => {
                return this.downloadFile(res.json().fileName)
            })
            .catch(this.handleError);
    }

    /**
     * Download file with given filename
     * @param filename
     * @return {Promise}
     */
    downloadFile(filename:string) {
        let fileUrl = `${this.fileDownloadUrl}/?filename=${filename}&search=${this.searchQuery}&type=${this.resultFileType}`;
        window.open(fileUrl);
    }
}
