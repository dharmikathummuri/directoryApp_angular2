import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{FilterPipe} from '../filter.pipe';
import {LoggingService} from '../logging.service';
import {DataService} from '../data.service';
declare var firebase:any;
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  pipes:[FilterPipe],
  providers:[LoggingService,DataService]
})
export class DirectoryComponent implements OnInit {
    ninjas=[];
  constructor(private logger :LoggingService,private dataService :DataService) {
    this.dataService=dataService;
   }

               logIt(){

                 this.logger.log();
               }

          ngOnInit() {

             // this.dataService.fetchData().subscribe(
             //  (data) => this.ninjas = data;
             // );
             this.fbGetData();
           }

           fbGetData(){
             firebase.database().ref('/').on('child_added',(snapshot) =>{
                this.ninjas.push(snapshot.val())

             })

           }
           fbPostData(ninja,belt){
             firebase.database().ref('/').push({name:ninja,belt:belt});

           }

}
