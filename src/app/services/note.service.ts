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
    getNoteById(id) {
        return this.httpClient.get(`${this.baseUrl}/${id}`);
    }


    addNotes(data) {
        return this.httpClient.post(this.baseUrl, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }


    deleteNote(id: number){
        return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }


}