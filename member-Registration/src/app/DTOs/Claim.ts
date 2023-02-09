export interface Claim{
    id: number;
    claimNumber: number;
    memberName :String;
    dateOfBirth: Date;
    dateOfAdmission :Date;
    dateOfDischarge : Date;
    providerName : String;
    totalBillAmount:number;
    registeredUser:number;

}