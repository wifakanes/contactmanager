import {Contact} from '../models/Contact';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
value: any;
  constructor() {  
    this.setMarkContactStyle(); 
    this.createContact(); 
  } 
  isMarked = true; 
  isFriendContact = true; 
  isFamilyContact = false; 
  isWorkContact = true; 
 
  markContactStyle: Record<string, string> = {}; 
setMarkContactStyle() { 
this.markContactStyle = { 
'font-style': this.isFriendContact ? 'italic' : 'normal', 
'font-weight': !this.isFamilyContact ? 'bold' : 'normal', 
'font-size': this.isWorkContact ? '24 px' : '12px'  
} 
  
  } 
  ngOnInit(): void {
  }
  deleteContact(id:number):void{
  
 

    let index:number=-1;
    for(let c of this.listContacts){
      index = index+1;
      if(c.id==id){
      break;
      }
      
      }
      if(index!=-1){
      this.listContacts.splice(index,1);
      }
  }
 
  editContact():void{
    
    if(confirm("voulez-vous ajouter le contact")){
      alert("work")
    }
  }
  listContacts: Array<Contact> = new Array<Contact>(); 
  createContact() { 
    this.listContacts.push({id:0,type:"Work",firstName:"Emily ",lastName:"Johnson",email:"emily.j@email.co.uk",description:"Travail",phone:"07812 345 678"});
    this.listContacts.push({id:1,type:"Work",firstName:"Oliver ",lastName:"Patel",email:"oliver.p@email.co.uk",description:"Famille",phone:"07987654321"});
    this.listContacts.push({id:2,type:"Family",firstName:"Sophia ",lastName:"Turner",email:"sophia.t@email.co.uk",description:"Amis",phone:"07799888777"});
    this.listContacts.push({id:3,type:"Family",firstName:"Daniel ",lastName:"Williams",email:"daniel.w@email.co.uk",description:"Travail",phone:"07654321987"});
    this.listContacts.push({id:4,type:"Friend",firstName:"Jasmine ",lastName:"Brown",email:"jasmine.b@email.co.uk",description:"Famille",phone:"07543210987"});
    this.listContacts.push({id:5,type:"Friend",firstName:"Liam ",lastName:"Walker",email:"liam.w@email.co.uk",description:"Amis",phone:"07432109876"});
  } 
}