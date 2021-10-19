import { Component, OnInit } from '@angular/core';
import portfolioData from '../portfolio-overview/portfolio-data.json';
import portfolioNewData from '../portfolio-overview/portfolio-newdata.json';

@Component({
  selector: 'app-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.css']
})
export class PortfolioOverviewComponent implements OnInit {
  [x: string]: any;

  public PortfolioData1:{image:string,title:string,amount:string, percent:string}[] = portfolioData;
  public PortfolioData2:{image:string,title:string,amount:string, percent:string}[] = portfolioNewData;

   dropdownList: any =[
     "Bucket 1", "Bucket 2" ,"Bucket 3","Bucket 4"
   ]
   dropdownList2=[
    "January'21", "Febuary' 21" ,"March' 21 ","April' 21"
  ]
  constructor() { }
 

  ngOnInit(): void {

  }
 
  selectedValue: any;
 
  onSelectList(event: any){
  // this.selectedValue = event.trigger.item;
  this.selectedValue =this.event.item;
  console.log( this.selectedValue);

  }

  

  

}
function item(item: any): any {
  throw new Error('Function not implemented.');
}

