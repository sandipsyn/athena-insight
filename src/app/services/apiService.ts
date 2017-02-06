import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { backendConfig } from './../configs/auth.config';

@Injectable()
export class ApiService {

  private taggedApiUrl = `http://${backendConfig.endpoint}/processData`;

  constructor(private http: Http) { }

  /**
   * Return HTTP promise object
   * @return {Object} Promise
   */
  getTaggedResult(data: any): Promise<any> {
    return this.http.post(this.taggedApiUrl, data)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  /**
   * Error handler of HTTP request
   * @return {Obejct | promise}
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
