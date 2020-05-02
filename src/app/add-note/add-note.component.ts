import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteService:NoteService,private router:Router) { }

  ngOnInit(): void {
  }

  submit(formData){
    console.log(formData);
    formData.created = new Date();
    this.noteService.addNotes(formData).subscribe(res=>{
      alert('Note Created Successfuly');
      this.router.navigate(['']);
    })
  }


}
