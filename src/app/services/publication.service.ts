import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment.prod';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PublicationService {
  apiUrl: String;
  constructor(private http: Http) {
    this.apiUrl = environment.apiUrl;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPublications(contentType, fieldName, sortDir): Promise<Array<Object>> {
    return this.http.get(`${this.apiUrl}api/posts?type=${contentType}&fieldName=${fieldName}&sortDir=${sortDir}`)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getPublication(id): Promise<Object> {
    return this.http.get(`${this.apiUrl}api/posts/${id}`)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  addPublication(data): Promise<Object> {
    return this.http.post(`${this.apiUrl}api/posts`, data)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  removePublication(id): Promise<Object> {
    return this.http.delete(`${this.apiUrl}api/posts/${id}`)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  updatePublication(id, data): Promise<Object> {
    return this.http.put(`${this.apiUrl}api/posts/${id}`, data)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
}
