import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChapitresService{
    private apiUrl = '/api/chapitres'; // pour getAllChapitres

    constructor(private http: HttpClient) { }

    /**
     * Get all students
     * @returns An Observable with the list of all chapitres
     */
    getAllChapitres(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
