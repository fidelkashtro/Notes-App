import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  id : number;
  noteDetails;
  constructor(private ActivatedRoute:ActivatedRoute, private noteService:NoteService, private router :Router) { 
    this.ActivatedRoute.params.subscribe(data=>{
      this.id = data['id'];
      this.getDetails();
    });
  }


  ngOnInit(): void {

  }


  getDetails(){
    this.noteService.getNoteById(this.id).subscribe(data=>{
      console.log(data);
      this.noteDetails = data;
    }); 
  }

  deleteNote(id){
    this.noteService.deleteNote(id).subscribe(data=>{
      alert('Note Deleted Successfuly');
      this.router.navigate(['']);
    }); 
  }

}
