import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settlement-offer',
  templateUrl: './settlement-offer.component.html',
  styleUrls: ['./settlement-offer.component.css']
})
export class SettlementOfferComponent implements OnInit {
 
  OffersData=[{
    "image":"",
    "value": "",
    "Text":"",
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
