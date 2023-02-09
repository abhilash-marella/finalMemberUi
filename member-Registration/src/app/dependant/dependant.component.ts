import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Dependant } from '../DTOs/Dependant';
import { MemberService } from '../services/member-service/memberservice.service';

@Component({
  selector: 'app-dependant',
  templateUrl: './dependant.component.html',
  styleUrls: ['./dependant.component.css']
})
export class DependantComponent {
  dependantForm !: FormGroup;
  errorMessage : string = "";
  dependant !:Dependant;
  constructor(
    private memberService: MemberService,
    private formBuilder: FormBuilder,private router: Router,
    ) { }



    
  ngOnInit(): void {
    this.dependantForm = this.formBuilder.group({
      memberName:['',[Validators.required,Validators.pattern('^[A-Za-z ]+$'),Validators.minLength(3)]],
      dateOfBirth:['',[Validators.required,Validators.minLength(1)]],
      registeredUser:['',[Validators.required,Validators.pattern('^[A-Za-z0-9 ]+$'),Validators.minLength(1)]],
   });
  }

  addDependant() { 
    this.memberService.addDependant(this.dependantForm.value).subscribe(
      success => {
        this.dependant=success;
        alert(this.dependant.memberName+" has been added as your dependant ")
        this.router.navigate(["/"])
      },error=>{console.log(error)
        alert(error.errorMessage)
      }
    );
   
    
  }
}
