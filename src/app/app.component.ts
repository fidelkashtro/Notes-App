import { Component, OnInit } from '@angular/core';
import {NoteService} from './services/note.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'note-app';
  notesList
  constructor(private noteService:NoteService){

  }


  ngOnInit(){
    this.noteService.getNotes().subscribe(res=>{
      this.notesList = res;
    })
  }

}
