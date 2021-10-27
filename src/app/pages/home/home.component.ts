
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
  
  ngOnInit(): void {
    this.ApiServiceData.getRequest().subscribe(
      (res:any) => {
        this.users = res.data;
        console.log(res);
      }) 
  }

//Onclick div Hide and show Start
  display = "none";
  openModal() {
    this.display = "block";
  }
  closeModal() {
    this.display = "none";
  }
  //Onclick Single Data div Hide and show End

  SelectedValue :any='userprofile';
  onChangeValue(userprofile:any){
    this.SelectedValue = userprofile;
    console.log('SelectedValue');
  }

  

}


