import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private baseUrl = 'http://localhost:8080/api/reports';

  constructor(private http: HttpClient) { }

  downloadUserReport() {
    return this.http.get(`${this.baseUrl}/users`, { responseType: 'blob' });
  }
}
