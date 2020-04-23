import {Injectable} from '@angular/core';
import {Tool} from './tool';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  //private toolsUrl = 'http://135.0.65.68:9122/tools';
  private toolsUrl = 'https://gtatoolsapi.herokuapp.com/tools';

  constructor(private http: HttpClient) {
  }

  getAllTools(): Observable<Tool[]> {
    return this.http.get<Tool[]>(`${this.toolsUrl}`);
  }

  getToolById(id: string): Observable<Tool> {
    return this.http.get<Tool>(`${this.toolsUrl}/${id}`);
  }

  newTool(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.toolsUrl}`, data);
  }

  deleteToolById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.toolsUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete<any>(`${this.toolsUrl}`);
  }

  editTool(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.toolsUrl}/${id}`, data);
  }

}
