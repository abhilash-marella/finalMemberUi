import { Component } from '@angular/core';
import { User } from '../DTOs/User';
import { MemberService } from '../services/member-service/memberservice.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user?:User;
  searchQuery:string = "";
  userinfo!: any;
  constructor(public memberServices:MemberService,private router: Router){
   
  }
  
  salutation():string{
    return this.user? "Hello User":"";
  }

  onEnter(searchQuery:string) { 
    this.searchQuery = searchQuery;
    console.log(searchQuery)
    this.memberServices.getUserData(searchQuery).subscribe(
      success=>{
        console.log(success)
        if(searchQuery.length>0) {
          this.userinfo = success;
        }else 
        this.userinfo = success;
        
      },
      error=>{
        this.userinfo = null;
        console.log(error)}
    );
  }
  
}
