import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { AddNoteComponent } from './add-note/add-note.component';


const routes: Routes = [
  { path:"addnote", component:AddNoteComponent},
  { path:"note/:id", component:NoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
