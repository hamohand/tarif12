import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChapitresService{
    /**
     * Suivre les conventions REST, où les URL pour une ressource
     * "chapitres" sont formatées comme `/api/students` et `/api/chapitres/{id}`.
     * @private
     */

    private readonly apiUrl = environment.apiUrl;
    // URL de base pour la ressource étudiant
    private readonly chapitresUrl = `${this.apiUrl}/chapitres`;

    //private apiUrl = '/api/chapitres'; // pour getAllChapitres

    constructor(private http: HttpClient) { }

    /**
     * Get all chapitres
     * @returns An Observable with the list of all chapitres
     */
    getAllChapitres(): Observable<any[]> {
        return this.http.get<any[]>(this.chapitresUrl);
    }
}
