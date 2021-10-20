import { Component, OnInit } from '@angular/core';
import portfolioData from '../portfolio-overview/portfolio-data.json';
import portfolioNewData from '../portfolio-overview/portfolio-newdata.json';
import { Dropdown } from '../portfolio-overview/dropdownList';
import { DROPDOWNLIST } from '../portfolio-overview/dropdownListValues';

@Component({
  selector: 'app-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.css']
})
export class PortfolioOverviewComponent implements OnInit {


  public PortfolioData1:{image:string,title:string,amount:string, percent:string}[] = portfolioData;
  public PortfolioData2:{image:string,title:string,amount:string, percent:string}[] = portfolioNewData;

  //  dropdownList: any =[
  //    "Bucket 1", "Bucket 2" ,"Bucket 3","Bucket 4"
  //  ]

  public events: string[] = [];

  public dropdownList2: Array<string>=[
     "January'21", "Febuary' 21" ,"March' 21 ","April' 21"
   ];



 
   constructor() { }

   dropdownContent:  any;
 
  ngOnInit(): void {
    this.dropdownContent = true;
    
  }

  
  SelectedValue = "March' 21";
  onChange(item:any){
    this.SelectedValue =  item;
  

  }


// SelectedData:any;
//      onChange(event:any){
//    this.SelectedData = event.target.value;
//    console.log( this.SelectedData);
//    console.log(event);
//   }

 

  



//   Dropdownlist = DROPDOWNLIST;
//   selectedDropdown?: Dropdown;
// onSelectList(item: Dropdown):void{
//   this.selectedDropdown = item;
// }
  

  

}


