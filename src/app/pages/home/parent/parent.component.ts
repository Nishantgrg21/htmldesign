import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Users } from '../users';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private ApiServiceData: ApiService) { }
  users!: Users[];
  ngOnInit() {
    this.ApiServiceData.getRequest().subscribe(
      (res: any) => {
        this.users = res.data;
        console.log(res);
      })
  }


  id = "";
  email = " ";
  first_name = "";
  last_name = "";
  avatar = "";
  usersList: any = [];

  SelectedValue: any = [];
  OnChangeValue(userprofile: any) {
    this.usersList.id = userprofile.id;
    this.usersList.email = userprofile.email;
    this.usersList.first_name = userprofile.first_name;
    this.usersList.last_name = userprofile.last_name;
    this.usersList.avatar = userprofile.avatar;
    this.SelectedValue = this.usersList;
    console.log(this.SelectedValue);
    this.ApiServiceData.changeMessage(this.SelectedValue)
  }

}
