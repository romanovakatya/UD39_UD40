import {Component, Input, OnInit} from '@angular/core';
import {CharactersService} from "../characters.service";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

 character: any = null;
 @Input() id: number = 0;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {

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
