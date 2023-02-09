import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dependant } from 'src/app/DTOs/Dependant';
import { MemberService } from 'src/app/services/member-service/memberservice.service';

@Component({
  selector: 'app-dependantinfo',
  templateUrl: './dependantinfo.component.html',
  styleUrls: ['./dependantinfo.component.css']
})
export class DependantinfoComponent {
  searchQuery:string = "";
  queryResult!: Array<Dependant>;
  Depandent: any;
constructor(private router : ActivatedRoute,private memberServices:MemberService){
 }
  onEnter(searchQuery:string) { 
    this.searchQuery = searchQuery;
    console.log(searchQuery)
    this.memberServices.getDependantsByUserId(searchQuery).subscribe(
      success=>{
        console.log(success)
        if(searchQuery.length>0) {
          for (let i = 0, len = success.length; i < len; i++) {
            var dob= new Date(success[i]?.dateOfBirth);
            var month_diff = Date.now() - dob.getTime();
            var age_dt = new Date(month_diff); 
           var year = age_dt.getUTCFullYear();
           var age = Math.abs(year - 1970);
           success[i].age=age;
          }
          this.queryResult = success;}
       
      },
      error=>{console.log(error)}
    );
   
    
    
   
  }


}
