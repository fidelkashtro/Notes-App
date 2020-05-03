import { Component, OnInit } from '@angular/core';
import {NoteService} from './services/note.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'note-app';
  disabled = true;
  note = null;
  notesList;
  created;
  currentNote = null;
  searchTerm;
  constructor(private noteService:NoteService){}


  ngOnInit(){
   this.getNotesList();
  }

  getNotesList(){
    this.noteService.getNotes().subscribe(res=>{
      this.notesList = res;
    })
  }



  create(){
   this.disabled = false;
   this.created = new Date()
    if(this.currentNote){
        let data = {
          name : this.note,
          created: new Date()
        }
        this.noteService.updateNote(this.currentNote.id, data).subscribe(res=>{
          this.getNotesList();
          this.disabled = true;
          this.note = null;
          this.currentNote = null;
        });
    }else{
      if(this.note){
        let data = {
          name : this.note,
          created: new Date()
        }
        this.noteService.addNotes(data).subscribe(res=>{
          this.getNotesList();
          this.disabled = true;
          this.note = null;
        });
      }
    }
  }

  editNote(note){
    this.currentNote = note;
    this.disabled = false;
    this.note = note.name;
    this.created = note.created;
  }

  delete(){
    if(this.note && this.currentNote.id){
      this.noteService.deleteNote(this.currentNote.id).subscribe(res=>{
        this.getNotesList();
        this.disabled = true;
        this.note = null;
        this.currentNote = null;
      })
    }
  }

}
