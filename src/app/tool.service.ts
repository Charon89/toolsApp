import {Injectable} from '@angular/core';
import {Tool} from './tool';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private toolsUrl = 'http://135.0.65.68:9122/tools';

  constructor(private http: HttpClient) {
  }

  getAllTools(): Observable<Tool[]> {
    return this.http.get<Tool[]>(`${this.toolsUrl}`);
  }

  newTool(data: Tool): Observable<any>
  {
    return this.http.post<any>(`${this.toolsUrl}`, data);
  }

}
