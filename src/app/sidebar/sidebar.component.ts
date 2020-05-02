import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Router, NavigationEnd,Event } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  notesList
  constructor(private noteService:NoteService, private _router:Router){
    this._router.events.subscribe((routerEvent: Event) => {


      if (routerEvent instanceof NavigationEnd) {
        this.getNotesList();
      }
    });
  }


  ngOnInit(){
    // this.noteService.getNotes().subscribe(res=>{
    //   this.notesList = res;
    // })
  }


  getNotesList(){
    this.noteService.getNotes().subscribe(res=>{
      this.notesList = res;
    })
  }

}
