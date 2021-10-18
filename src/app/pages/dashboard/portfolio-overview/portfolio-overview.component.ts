import { Component, OnInit } from '@angular/core';
import portfolioData from '../portfolio-overview/portfolio-data.json';
import portfolioNewData from '../portfolio-overview/portfolio-newdata.json';

@Component({
  selector: 'app-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.css']
})
export class PortfolioOverviewComponent implements OnInit {

  public PortfolioData1:{image:string,amount:string, percent:string}[] = portfolioData;
  public PortfolioData2:{image:string,amount:string, percent:string}[] = portfolioNewData;
  constructor() { }

  ngOnInit(): void {
  }

  

}
