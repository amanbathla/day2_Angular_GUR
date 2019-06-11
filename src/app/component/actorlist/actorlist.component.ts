import { Component, OnInit } from '@angular/core';
import { ActionSequence } from 'protractor';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  actorList;
  newName:string;
  newCity:String;
  newRating:string;
  editTrue:Boolean;
  tempActorList;
  
  selectedIndex:number;
  tempActor;
    constructor() { }


  ngOnInit() {
    this.editTrue = false;
    this.actorList = [
      {name:"Amitabh Bacchan",city:"Mumbai",rating:9.0},
      {name:"Salman Khan",city:"Mumbai",rating:8.0},
      {name:"Kamal Hasan",city:"Chennai",rating:7.0},
      {name:"Deepika Padukone",city:"Mumbai",rating:9.3},
      {name:"Priyanka Chopra",city:"Hollywood",rating:9.3},
      {name:"Rajnikant",city:"Chennai",rating:10.0},
    ];

    this.newCity = '';
    this.newName = '';
    this.newRating = '';
    this.tempActor = null;
    this.tempActorList = this.actorList.splice();
  }

  addActor(){
    this.actorList.push({
      name:this.newName ,
      city:this.newCity,
      rating:this.newRating
 
    });
   
   this.newCity = '';
   this.newName = '';
   this.newRating = '';

  }

  

  deleteActor(index){
    this.actorList.splice(index,1);
  }

  editActor(index){

    this.selectedIndex = index;

    //Aproach 1 (Not Recommended)

    // this.tempActor = {
    //   name:this.actorList[index].name ,
    //   city:this.actorList[index].city,
    //   rating:this.actorList[index].rating
    // } 
  
  //Approach 2(Recommended)
  this.tempActor = JSON.parse(JSON.stringify(this.actorList[index]));

  }


  saveActor(index){
    this.selectedIndex = -1;

  }

  cancelActor(index){
   this.actorList.splice(index,1,this.tempActor);
  }




  // Resset and compare functions

  resetList(){
    this.actorList = this.tempActorList.splice();
     }
  
  sortList(prop,direction){
       this.actorList.sort(
         (first,second) =>{
           if(direction == 'ascending'){
             if(prop === 'name' || prop === 'city'){
                if(first[prop] < second[prop]){
                       return -1;
                     }
                 if(first[prop] > second[prop]){
                       return 1;
                 }
                   else{
                     return 0;
                 }
             }
             // else properrty is rating 
             else{
               return first[prop] - second[prop];
             }
           }
           // desending order

           else{
            if(prop === 'name' || prop === 'city'){
              if(first[prop] < second[prop]){
                     return 1;
                   }
               if(first[prop] > second[prop]){
                     return -1;
               }
                 else{
                   return 0;
               }
           }
           // else properrty is rating 
           else{
             return second[prop] - first[prop];
           }

           }
         }      )
     }
}
