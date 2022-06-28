import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animapp, Datos } from '../interfaces/animapp';

@Injectable({
  providedIn: 'root'
})
export class AnimappService {
  apiKey: string= 'peZHeHfPxY1kPiah57KjUz0RnBUOoY7i';
  resultados: Datos[] = [];

  constructor(private http: HttpClient) { }


  buscarGifs(query: string){
    this.http.get<Animapp>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10'`)
    .subscribe(resp =>{
      console.log(resp.data);
      this.resultados = resp.data;
    })
  }
}
