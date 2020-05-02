import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
    baseUrl = 'http://localhost:3000/notes';
    constructor(private httpClient: HttpClient) {}

    getNotes() {
        return this.httpClient.get(this.baseUrl);
    }


    addNotes(employee) {
        return this.httpClient.post(this.baseUrl, employee, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }


    deleteNote(id: number){
        return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }


}