import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-responsive.component.css']
})
export class HomeComponent implements OnInit {

  cardDescription: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, illo
    maxime doloremque accusamus reprehenderit iste, facere, quis modi vel inventore accusantium ab?
    Dolores voluptatibus nesciunt commodi natus quos nam animi.`

  cardTitleSmall = `Lorem ipsum dolor sit amet consectetur`

  cardImageSmall: string =
    `https://sm.ign.com/t/ign_br/screenshot/default/20170919-201325_2r4d.960.jpg`

  constructor() { }

  ngOnInit(): void {
  }

}
