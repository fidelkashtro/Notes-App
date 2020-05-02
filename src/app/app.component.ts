import { Component, OnInit } from '@angular/core';
import {NoteService} from './services/note.service'
import { Router, NavigationEnd ,Event} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'note-app';
  notesList
  constructor(private noteService:NoteService,private _router:Router){
    // this._router.events.subscribe((routerEvent: Event) => {


    //   if (routerEvent instanceof NavigationEnd) {
    //     this.getNotesList();
    //   }
    // });
  }


  ngOnInit(){
   
  }

  getNotesList(){
    this.noteService.getNotes().subscribe(res=>{
      this.notesList = res;
    })
  }

}
