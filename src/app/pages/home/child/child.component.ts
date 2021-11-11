import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  result!: any;
  SelectedValue: any = [];

  constructor(private ApiServiceData: ApiService) { }

  ngOnInit() {
    this.result = this.ApiServiceData.currentMessage.subscribe(value => this.SelectedValue = value)
  }


}


