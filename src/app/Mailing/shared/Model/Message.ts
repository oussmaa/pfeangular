export interface Message {
  id?:number;
    name?: string;
    description?: string;
    subject?: string;
    date?:Date;
    email?:string;
    time?:string;
    sendTo?:string;
    file?:string ;
  
  }