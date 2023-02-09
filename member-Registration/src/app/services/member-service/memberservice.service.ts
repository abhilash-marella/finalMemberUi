import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Claim } from 'src/app/DTOs/Claim';
import { Dependant } from '../../DTOs/Dependant';
import { User } from '../../DTOs/User';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public user: any;
 constructor(private httpClient: HttpClient) {
}
  registerUser(user: User) {
   return this.httpClient.post<User>("http://localhost:8088/register", user);
  }
  registerClaim(claim: Claim) {
    return this.httpClient.post<Claim>("http://localhost:8089/placeClaim", claim);
  }
  addDependant(dependant: Dependant) {
   return this.httpClient.post<Dependant>("http://localhost:8089/addDependant", dependant);
  }
getDependantsByUserId(userId: string): Observable<any> {
    console.log("==================="+userId);
    return this.httpClient.get("http://localhost:8089/getDependants/"+userId );
  }
  getClaimsByUserId(userId: string): Observable<any> {
    console.log("==================="+userId);
    return this.httpClient.get("http://localhost:8089/yourClaims/"+userId );
  } 
  
  getUserData(userId: string) {
    return this.httpClient.get("http://localhost:8089/memeberDetails/"+userId);
   }
}
