import {Component, OnInit} from '@angular/core';
import {ChapitresService} from '../services/chapitres.service';

@Component({
  selector: 'app-chapitres',
  standalone: true,
  imports: [],
  templateUrl: './chapitres.component.html',
  styleUrl: './chapitres.component.css'
})
export class ChapitresComponent implements OnInit{
  chapitres: any[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  page: number = 0;
  size: number = 20; // Définir la taille de page souhaitée
  totalPages: number = 0;
  totalElements: number = 0;

  constructor(private chapitresService: ChapitresService) {}

  ngOnInit(): void {
    this.loadChapitres();
  }

  /*loadChapitresOld(): void {
    this.isLoading = true;
    this.error = null;

    this.chapitresService.getAllChapitres()
        .subscribe({
          next: (chapitres: any[]) => {
            this.chapitres = chapitres;
            console.log('chapitres loaded:', chapitres);
            this.isLoading = false;
          },
          error: (err: any) => {
            console.error('Error loading chapitres:', err);
            this.error = 'Une erreur est survenue lors du chargement des chapitres. Veuillez réessayer.';
            this.isLoading = false;
          }
        });
  }*/
  loadChapitres(): void {
    this.isLoading = true;
    this.error = null;

    this.chapitresService.getAllChapitres(this.page, this.size)
        .subscribe({
          next: (response: any) => {
            this.chapitres = response.content; // Les données sont dans la propriété 'content'
            this.totalPages = response.totalPages;
            this.totalElements = response.totalElements;
            console.log('chapitres loaded:', this.chapitres);
            this.isLoading = false;
          },
          error: (err: any) => {
            console.error('Error loading chapitres:', err);
            this.error = 'Une erreur est survenue lors du chargement des chapitres. Veuillez réessayer.';
            this.isLoading = false;
          }
        });
  }

  // Fonctions optionnelles pour la navigation entre les pages
  nextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadChapitres();
    }
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadChapitres();
    }
  }

}
