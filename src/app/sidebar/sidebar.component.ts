import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  notesList
  constructor(private noteService:NoteService){

  }


  ngOnInit(){
    this.noteService.getNotes().subscribe(res=>{
      this.notesList = res;
    })
  }

}
