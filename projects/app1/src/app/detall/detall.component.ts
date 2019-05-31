import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/core/utils';
@Component({
  selector: 'app-detall',
  templateUrl: './detall.component.html',
  styleUrls: ['./detall.component.css']
})
export class DetallComponent implements OnInit {
  fechaHora: string;
  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    this.fechaHora = this.utilsService.twoDigits('1');
  }
}
