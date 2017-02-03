import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private taggedApiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getTaggedResult(): Promise<any> {
    return this.http.get(this.taggedApiUrl)
               .toPromise()
               .then(response =>
                 response.json()
               )
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
