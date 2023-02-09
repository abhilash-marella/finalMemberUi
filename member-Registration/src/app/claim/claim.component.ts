import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Claim } from '../DTOs/Claim';
import { MemberService } from '../services/member-service/memberservice.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent {


  

 
  claimForm !: FormGroup;
  errorMessage : string = "";
  claims!: Claim;
  submitted:boolean=false;
  constructor(
    private memberServices: MemberService,
    private formBuilder: FormBuilder,private router: Router,
    ) { }
    minDate!:Date;
  ngOnInit(): void {
    this.claimForm = this.formBuilder.group({
      memberName:['',[Validators.required,Validators.pattern('^[A-Za-z ]+$'),Validators.minLength(3)]],
      dateOfAdmission:['',[Validators.required,Validators.minLength(1)]],
      dateOfDischarge:['',[Validators.required,Validators.minLength(1)]],
      providerName:['',[Validators.required,Validators.pattern('^[A-Za-z ]+$'),Validators.minLength(3)]],
      totalBillAmount:['',[Validators.required,Validators.pattern('^[0-9 ]+$'),Validators.minLength(1)]],
      userId:['',[Validators.required,Validators.pattern('^[A-Za-z0-9 ]+$'),Validators.minLength(1)]],
     
      
    });

   
  }

  placeClaim() { 
    this.memberServices.registerClaim(this.claimForm.value).subscribe(
      success => {
        this.claims=success;
        alert("placed your claim with id "+this.claims.claimNumber+" check in my claims with userId")
        this.router.navigate(["/"])
      },(error:HttpErrorResponse)=>{console.log(error.error.message)
        alert(error.error.message)
      }
    );
    
    
  }

}
