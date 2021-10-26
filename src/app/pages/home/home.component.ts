
import { Component, OnInit } from '@angular/core';
import  {ApiService  } from './api.service';
import { Users } from './users';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor( private ApiServiceData :ApiService) { }



  users! : Users[];

  SingleContent:any;
  ngOnInit(): void {
    this.ApiServiceData.getRequest().subscribe(
      (res:any) => {
        this.users = res.data;
        console.log(res);
      }) 
  this.SingleContent=true
  }

  // SelectedValue :any='userprofile';
  // onChangeValue(userprofile:any){
  //   this.SelectedValue = userprofile;
  //   console.log('SelectedValue');
  // }

  display = "none";
  openModal() {
    this.display = "block";
  }
  closeModal() {
    this.display = "none";
  }

}


