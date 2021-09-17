import { Contact } from "./Contact";

 
export interface User{


    id?:number;
    username: string;
    email?: string;
    password?: string;
    numero?:string;
    image?:string;
    roles?:string;
    verife?:string;
    rolesemp?:string;
    contact?:Contact;


}