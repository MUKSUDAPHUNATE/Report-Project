import { Component, OnInit } from '@angular/core';
import {ReportcovidService} from '../../../services/reportcovid.service'


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  data : any
  datas : any

  constructor(private service:ReportcovidService) { }

  ngOnInit(): void {

    this.service.getdata().subscribe((response) => {
      this.datas = response

    });
  }


}
