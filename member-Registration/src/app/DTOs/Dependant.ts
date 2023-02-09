import { User } from "./User";

export interface Dependant {
    id: number;
    memberName: string;
    dateOfBirth: Date;
    registeredUser: string;
    age: number;
}