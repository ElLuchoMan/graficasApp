import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {


  // Doughnut
  public doughnutChartLabels: Label[] = [

  ];
  public doughnutChartData: MultiDataSet = [

  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    { backgroundColor: ['#0075ED', '#00BAF7', '#00E0DB', '#00F7AD', '#00ED63'] }
  ]
  constructor(private graficasService: GraficasService) { }
  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSocialesDonaData().subscribe(({ labels, values }) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    });
    // this.graficasService.getUsuariosRedesSociales().subscribe(data => {
    //   console.log(data);
    //   const values = Object.values(data);
    //   const labels = Object.keys(data);
    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(values);
    // });
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
