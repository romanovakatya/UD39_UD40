import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  pages = 34;
  pageRandom = Math.trunc(Math.random() * this.pages) + 1;

  constructor(private http: HttpClient) {
  }

  returner() {
    return this.http.get("https://rickandmortyapi.com/api/character?page=" + this.pageRandom)
  }

  getCharacter(id: number) {
    return this.http.get("https://rickandmortyapi.com/api/character/" + id)
  }
}
