import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private baseUrl = 'http://localhost:8080/api/reports';

  constructor(private http: HttpClient) { }

  downloadUserReport() {
    return this.http.get(`${this.baseUrl}/users`, { responseType: 'blob' });
  }

  private apiUrl = 'http://localhost:8080/api/documents'; // URL base de tu API

  

  downloadUserReport14(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/user-report`, { responseType: 'blob' });
  }

  downloadFormato14(id: number): Observable<Blob> {
    return this.http.post(`${this.apiUrl}/generate-document?id=${id}`, null, { responseType: 'blob' });
  }
}
