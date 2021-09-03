import {Component, OnInit} from '@angular/core';
import {CharactersService} from "../characters.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any = null;
  id: number = 0;

  constructor(private charactersService: CharactersService) {
  }

  ngOnInit(): void {

    this.charactersService.returner()
      .subscribe(
        result => {
          this.characters = result;

        },
        error => {
          console.log('problems');
        }
      )
  }

  saveId(id: number){
    this.id = id;
    console.log("de de saveId: " +  this.id);
  }
}
