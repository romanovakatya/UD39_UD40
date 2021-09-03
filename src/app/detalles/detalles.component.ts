import {Component, Input, OnInit} from '@angular/core';
import {CharactersService} from "../characters.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

 character: any = null;
 id: any;
 arrayTh = [1, 2, 3, 4, 5, 6];

  constructor(private charactersService: CharactersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.charactersService.getCharacter(this.id)
      .subscribe(
        result => {
          this.character = result;
          console.log(this.character);
        },
        error => {
          console.log('problems with get by id');
        }
      )
  }

}
