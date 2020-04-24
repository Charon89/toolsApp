import {Injectable} from '@angular/core';
import {Tool} from './tool';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private toolsUrl = 'https://gtatoolsapi.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getToolsPage(limit, skip, category): Observable<any> {
    if (category) {
      console.log('Service: Limit and Skip and Category');
      return this.http.get(`${this.toolsUrl}/tools?limit=${limit}&skip=${skip}&category=${category}`);
    } else if (limit && skip) {
      console.log('Service: Limit and Skip');
      return this.http.get(`${this.toolsUrl}/tools?limit=${limit}&skip=${skip}`);
    } else if (limit) {
      console.log('Service: Limit');
      return this.http.get(`${this.toolsUrl}/tools?limit=${limit}&skip=${skip}`);
    } else {
      console.log('Service: Else');
      return this.http.get(`${this.toolsUrl}/tools?limit=2&skip=0`);
    }
  }

  getAllTools(): Observable<Tool[]> {
    return this.http.get<Tool[]>(`${this.toolsUrl}/tools`);
  }

  getToolById(id: string): Observable<Tool> {
    return this.http.get<Tool>(`${this.toolsUrl}/tools/${id}`);
  }

  newTool(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.toolsUrl}/tools`, data);
  }

  deleteToolById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.toolsUrl}/tools/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete<any>(`${this.toolsUrl}/tools`);
  }

  editTool(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.toolsUrl}/tools/${id}`, data);
  }

  getCategory(): Observable<any> {
    return this.http.get(`${this.toolsUrl}/tools?field=category`);
  }

}
