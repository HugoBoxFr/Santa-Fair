import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { Place } from './place';
import { Observable } from 'rxjs';
import { Review } from './review';
import { Compo } from './compo';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  places : Place[];
  comment: Review;
  comments : Review[];
  articles : Article[]
  selectedArticle : Article

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<any> {
    return this.http.get<Place[]>(this.baseUrl + '/places');
  }

  getComments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/avis`);
  };

  addComment(newComment){
    return this.http.post(`${this.baseUrl}/avis`, newComment);
  }
  
  // Récupération des articles stockés dans la base de donnée
  getArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles`)
  };


  getCategories(): Observable<any> {
    return this.http.get<Category[]>(this.baseUrl + '/categories');

  }
  getCompos(): Observable<any> {
    return this.http.get<Compo[]>(this.baseUrl + '/compositions');

  }
}
