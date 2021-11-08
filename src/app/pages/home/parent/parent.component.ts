import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import  {ApiService  } from '../api.service';
import { Users } from '../users';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  

  
  constructor(private ApiServiceData :ApiService) { }
   users! : Users[];
 
  ngOnInit(): void {
    this.ApiServiceData.getRequest().subscribe(
      (res:any) => {
        this.users = res.data;
        console.log(res);
      }) 
  }

 SelectedValue :any="[]";
  data:any=[];

  onChangeValue(userprofile:any){
     console.log('SelectedValue');
      this.SelectedValue = "id :" + userprofile.id + "<br/>" + "Email:" +  userprofile.email +  '<br/>'
       + "First Name:" + userprofile.first_name+'<br/>' + "Last Name:" +  userprofile.last_name +  "<img src="+userprofile.avatar+" />";
       this.data= this.SelectedValue; 
  }


}
