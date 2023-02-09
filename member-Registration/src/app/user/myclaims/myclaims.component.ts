import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/services/member-service/memberservice.service';

@Component({
  selector: 'app-myclaims',
  templateUrl: './myclaims.component.html',
  styleUrls: ['./myclaims.component.css']
})
export class MyclaimsComponent {
  searchQuery:string = "";
  queryResult!: Array<any>;
  Claims: any;
  constructor(private router : ActivatedRoute,private memeberServices:MemberService){
  }
 onEnter(searchQuery:string) { 
    this.searchQuery = searchQuery;
    console.log(searchQuery)
    this.memeberServices.getClaimsByUserId(searchQuery).subscribe(
      success=>{
        console.log(success)
        if(searchQuery.length>0) {
          this.queryResult = success;
        }
        
      },
      error=>{console.log(error)}
    );
  }
}
