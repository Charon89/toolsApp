import {Injectable} from '@angular/core';
import {Tool} from './tool';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {InterceptTokenService} from './intercept-token.service';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private toolsUrl = 'https://gtatoolsapi.herokuapp.com';

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getToolsPage(limit, skip, category): Observable<any> {
    if (category) {
      return this.http.get(`${this.toolsUrl}/tools?limit=${limit}&skip=${skip}&category=${category}`);
    } else if (limit && skip) {
      return this.http.get(`${this.toolsUrl}/tools?limit=${limit}&skip=${skip}`);
    } else if (limit) {
      return this.http.get(`${this.toolsUrl}/tools?limit=${limit}&skip=${skip}`);
    } else {
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

  editTool(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.toolsUrl}/tools/${id}`, data);
  }

  addPhotos(id: string, photos: any): Observable<any> {
    return this.http.post(`${this.toolsUrl}/tools/photos/${id}`, photos);
  }

  getCategory(): Observable<any> {
    return this.http.get(`${this.toolsUrl}/tools?field=category`);
  }

  deleteToolById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.toolsUrl}/tools/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete<any>(`${this.toolsUrl}/tools`);
  }

  deleteImage(imageID): Observable<any> {
    return this.http.delete<any>(`${this.toolsUrl}/tools/photos/${imageID}`);
  }
}
