import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-activity-chart',
  standalone: true,
  imports: [CommonModule],
  providers:[AuthService],
  templateUrl: './activity-chart.component.html',
  styleUrl: './activity-chart.component.scss'
})
export class ActivityChartComponent {
  [x: string]: any;
  ActiveCount:number=0;
  InactiveCount:number=0;
  constructor( private  chartService:AuthService) {} 

    chartData:any;
    labelData:any[]=[];
    realData:any[]=[];
    colorData:any[]=[];
   ngOnInit(){
    this.chartService.getChartInfo().subscribe(result => {
          this.chartData = result;
          //debugger
          if(this.chartData != null) {
              for( let i=0; i<this.chartData.length; i++){
                if(this.chartData[i].activity === 'Active'){
                  this.ActiveCount+=1;
                }
                else if(this.chartData[i].activity === 'Disabled'){
                  this.InactiveCount+=1;
                }
                
                //debugger
                console.log(this.chartData[i]);
                this.labelData.push(this.chartData[i].fromDate);
                this.realData.push(this.chartData[i].fromDate);
              }
              console.log('countR',this.ActiveCount);
              console.log('countA',this.InactiveCount);
            
              this.RenderChart(this.labelData,'doughnut','dochart');
          }
    });
   
   }

   RenderChart(labeldata:any,type:any,id:any){
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: ['Active','Inactive'],
        datasets: [{
          label: '# of Votes',
          data: [this.ActiveCount,this.InactiveCount],
          backgroundColor: [
            'rgb(98, 186, 234)','rgb(238, 177, 212)'
          ],
          borderColor: [
            'rgb(98, 186, 234)','rgb(238, 177, 212)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

   }


}
