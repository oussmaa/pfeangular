import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../Model/Projet';
import { Room } from '../Model/Room';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  isLoginClient = false;
  isLoginEmployer = false;
  isLoginAdmin = false;
  isLoginSupperAdmin = false;



  roleAs!: string;

 
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  constructor(private httpClient: HttpClient) {


  }
  login(email: string, password: string) {  

    return this.httpClient.post<any>("http://localhost:8065/api/auth/signin",
     {email,password},this.httpOptions );
 
  }
  GetUserById(id:string): Observable<any> {
    return this.httpClient.get<User[]>("http://localhost:8065/api/auth/getUser/"+id );
     }
     GetImageById(id:string): Observable<any> {
      return this.httpClient.get<any>("http://localhost:8065/api/auth/showme/"+id);
       }
  register(username: string, email: string, password: string,numero:string): Observable<any> {
    return this.httpClient.post("http://localhost:8065/api/auth/signup", {
      username,
      email,
      password,
      numero,
      image:'',
      roles:"Client",
      verife:false,
      rolesemp:"",
      contact:{
        adreess:'',
        city:'',
        countrie:'',
        postalcode:''
      }
    }, this.httpOptions);
    
  }
  deleteuser(id:string): Observable<any> {
    return this.httpClient.delete("http://localhost:8065/api/auth/deletuser/"+id);
    
  }
  registeclient(username: string, email: string, password: string,numero:string,rolesemp:string): Observable<any> {
    return this.httpClient.post("http://localhost:8065/api/auth/signupemp",
     {
    
     username,
      email,
      password,
      numero,
      image:'',
      roles:rolesemp,
      verife:true,
      rolesemp,
      contact:{
        adreess:'',
        city:'',
        countrie:'',
        postalcode:''
      }

    }, this.httpOptions);
    
  }
  registerEmp(username: string, email: string, password: string,numero:string,rolesemp:string): Observable<any> {
    return this.httpClient.post("http://localhost:8065/api/auth/signupemp",
     {
    
     username,
      email,
      password,
      numero,
      image:'',
      roles:"Employes",
      verife:true,
      rolesemp,
      contact:{
        adreess:'',
        city:'',
        countrie:'',
        postalcode:''
      }

    }, this.httpOptions);
    
  }


  getAllUser(roles:string): Observable<any> {
    return this.httpClient.get<User[]>("http://localhost:8065/api/auth/getByRoles/"+roles );
     }
  saveToken(token:any)
  {
     localStorage.setItem("accessToken",token)
    return true;
  }
  loggedIn() {

    return !!localStorage.getItem('accessToken') ;

}
 
logout()
{
localStorage.removeItem("accessToken");
localStorage.removeItem("user_id");
  this.isLoginClient = false;
  this.isLoginEmployer = false;
  this.isLoginAdmin = false;
  this.isLoginSupperAdmin = false;

 }
getToken() {
  return localStorage.getItem('accessToken');
}

udateUserVerife(id:string): Observable<any> {
  return this.httpClient.put("http://localhost:8065/api/auth/updateverife/"+id, 
  
   this.httpOptions);
  
}
forgetpassword(email:string): Observable<any> {
  return this.httpClient.post("http://localhost:8065/api/auth/fprgetpassword/"+email, 
  
   this.httpOptions);
  
}
updatepassword(id:string,password:string): Observable<any> {
  return this.httpClient.put("http://localhost:8065/api/auth/updatepassword/"+id, 
  {
    password
  }
  ,
   this.httpOptions);
  
}
udateEmployees(username:string,email:string,numero:string,id:number,rolesUser:string): Observable<any> {
  return this.httpClient.put("http://localhost:8065/api/auth/updateemployes/"+id, {
    
    username,
    email,
    numero,
    rolesUser,
 
  }, this.httpOptions);
  
}
udateUser(username:string,email:string,numero:string,adreess:string,city:string,countrie:string,postalcode:string,id:number): Observable<any> {
  return this.httpClient.put("http://localhost:8065/api/auth/updateusernotfile/"+id, {
    
    username,
    email,
    numero,
   

    contact:{
      adreess,
      city,
      countrie,
      postalcode
    }
  }, this.httpOptions);
  
}
udateAdmin(username:string,email:string,numero:string,id:number,roles:string): Observable<any> {
  return this.httpClient.put("http://localhost:8065/api/auth/updateeadmin/"+id, {
    
    username,
    email,
    numero,
    roles,
 
  }, this.httpOptions);
  
}

getcountbyroles(roles:string): Observable<any> {
  return this.httpClient.get<any>("http://localhost:8065/api/auth/countbyroles/"+roles );
   }
   saveprojet(name:string,email:string,idadmin:string,description:string): Observable<any> {
    return this.httpClient.post("http://localhost:8065/api/projet/saveprojet", {
      
      name,
      idadmin,
      email,
      description
   
    }, this.httpOptions);
    
  }

  getProjetByemail(email:string): Observable<any> {
    return this.httpClient.get<Projet>("http://localhost:8065/api/projet/getprojetbyemail/"+email );
     }
     getprojetbyidadmin(idadmin:string): Observable<any> {
      return this.httpClient.get<Projet>("http://localhost:8065/api/projet/getProjet/"+idadmin );
       }
       


       updateprojet(name:string,email:string,description:string,id:number): Observable<any> {
        return this.httpClient.put("http://localhost:8065/api/projet/updateprojet/"+id, {
          
          name,
          email,
          description,
          
       
        }, this.httpOptions);
        
      }
      deleteprojet(id:string): Observable<any> {
        return this.httpClient.delete("http://localhost:8065/api/projet/deleteprojetc/"+id);
        
      }


      saverommm(name:string,emailuser:string,emailemployer:string,idadmin:string): Observable<any> {
        return this.httpClient.post("http://localhost:8065/api/projet/saveromm", {
          emailuser,
          emailemployer,
          idadmin,
          name,
        
         
   
       
        }, this.httpOptions);
        
      }

      getbyidadin(idadmin:string): Observable<any> {
        return this.httpClient.get<Room>("http://localhost:8065/api/projet/getrommadmin/"+idadmin );
         }



         deleteroomdis(id:string): Observable<any> {
          return this.httpClient.delete("http://localhost:8065/api/projet/deleteroom/"+id);
          
        }



        updateroom(name:string,emailuser:string,emailemployer:string,id:number): Observable<any> {
          return this.httpClient.put("http://localhost:8065/api/projet/updateroom/"+id, {
            
            emailuser,
            emailemployer,
            name,
            
         
          }, this.httpOptions);
          
        }
}
