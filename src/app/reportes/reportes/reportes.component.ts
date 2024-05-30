import { Component } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {

  constructor(private reportesService: ReportesService) { }

  generateReport() {
    this.reportesService.downloadUserReport().subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      saveAs(blob, 'users_report.pdf');
    }, error => {
      console.error('Error generating report', error);
    });
  }
}
